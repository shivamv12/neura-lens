/** Package Imports */
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Linking } from "react-native";

/** Components/Utils/Styles/Types Imports */
import { getPresignedUrl, notifyUploadComplete, uploadToS3 } from "@/services/imageUploader";
import { parseRawAnalysisJSON } from "@/utils/aiResponseJsonParser";
import { getDeviceMetadata, showAlertOnDevice } from "@/utils/deviceUtils";
import { compressImage } from "../utils/imageUtils";

export const useImageUpload = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [quickOverview, setQuickOverview] = useState<string | null>(null);
  const [objectsOrEntities, setObjectsOrEntities] = useState<string[]>([]);
  const [detailedContext, setDetailedContext] = useState<string | null>(null);
  const [isExplicitContent, setIsExplicitContent] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  /** Method to clear previous state */
  const resetState = () => {
    setQuickOverview(null);
    setObjectsOrEntities([]);
    setDetailedContext(null);
    setIsExplicitContent(false);
    setImageUri(null);
  };

  const requestPermission = async (type: "camera" | "gallery") => {
    const permission =
      type === "camera"
        ? await ImagePicker.getCameraPermissionsAsync()
        : await ImagePicker.getMediaLibraryPermissionsAsync();

    if (permission.canAskAgain) {
      const request =
        type === "camera"
          ? await ImagePicker.requestCameraPermissionsAsync()
          : await ImagePicker.requestMediaLibraryPermissionsAsync();
      return request.status === "granted";
    }

    showAlertOnDevice("Permission required", `Please enable ${type} access in Settings.`, [
      { text: "Cancel", style: "cancel" },
      { text: "Open Settings", onPress: () => Linking.openSettings() },
    ]);
    return false;
  };

  const pickImage = async (fromCamera = false) => {
    resetState();

    const hasPermission = await requestPermission(
      fromCamera ? "camera" : "gallery"
    );
    if (!hasPermission) return;

    const result = fromCamera
      ? await ImagePicker.launchCameraAsync({
          mediaTypes: ["images"],
          quality: 0.8,
        } as any)
      : await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          quality: 0.8,
        } as any);

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const type =
        result.assets[0].type === "image"
          ? result.assets[0].mimeType!
          : "image/png";

      setImageUri(uri);
      await handleUpload(uri, type);
    }
  };

  const handleUpload = async (uri: string, type: string) => {
    try {
      setLoading(true);

      const compressed = await compressImage(uri);
      const { preSignedUrl, filename } = await getPresignedUrl(type);

      const blob = await (await fetch(compressed.uri)).blob();
      await uploadToS3(preSignedUrl, blob, type);

      const { deviceId, deviceType, userIp } = await getDeviceMetadata();

      // Notify backend and capture its response (with analysis)
      const response = await notifyUploadComplete({
        filename,
        s3Key: filename,
        size: blob.size,
        width: compressed.width,
        height: compressed.height,
        deviceId,
        userIp,
        deviceType,
      });

      // Backend sends analysis on `response.data.data.processedImageDetails`
      const aiAnalysis = response.data?.data?.processedImageDetails;

      if (aiAnalysis?.content) {
        const { quickOverview, objectsOrEntities, detailedContext, isExplicitContent } =
          parseRawAnalysisJSON(aiAnalysis.content);

        setQuickOverview(quickOverview);
        setDetailedContext(detailedContext);
        setObjectsOrEntities(objectsOrEntities || []);
        setIsExplicitContent(isExplicitContent || false);
      } else {
        setQuickOverview("Could not process image!");
      }

      showAlertOnDevice("Upload Success", `File uploaded: ${filename}`);
    } catch (err: any) {
      console.error("Upload Error: ", err);
      showAlertOnDevice("Upload Failed", `Occurred error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { imageUri, setImageUri, pickImage, quickOverview, objectsOrEntities, detailedContext, isExplicitContent, loading };
};
