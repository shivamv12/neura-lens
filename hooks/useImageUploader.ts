/** Package Imports */
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Linking } from "react-native";

/** Components/Utils/Styles/Types Imports */
import { getPresignedUrl, notifyUploadComplete, uploadToS3 } from "@/services/imageUploader";
import { getDeviceMetadata } from "@/utils/deviceUtils";
import { parseRawProcessingText } from "@/utils/responseTextParser";
import { compressImage } from "../utils/imageUtils";

export const useImageUpload = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

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

    // Improvement: Common Alert Component
    Alert.alert(
      "Permission required",
      `Please enable ${type} access in Settings.`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Settings", onPress: () => Linking.openSettings() },
      ]
    );
    return false;
  };

  const pickImage = async (fromCamera = false) => {
    setAnalysis(null);
    setImageUri(null);
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
      setAnalysis(null);

      const compressed = await compressImage(uri);
      const { preSignedUrl, filename } = await getPresignedUrl(type);

      const file = await fetch(compressed.uri);
      const blob = await file.blob();
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
      if (aiAnalysis?.content && typeof aiAnalysis.content === "string") {
        const { quickExplanation } = parseRawProcessingText(aiAnalysis.content);
        setAnalysis(quickExplanation);
      } else setAnalysis("Could not process image!");

      Alert.alert("Upload Success", `File uploaded: ${filename}`);
    } catch (err: any) {
      console.error("Upload Error: ", err);
      Alert.alert("Upload Failed", err.message);
    } finally {
      setLoading(false);
    }
  };

  return { imageUri, setImageUri, pickImage, analysis, loading };
};
