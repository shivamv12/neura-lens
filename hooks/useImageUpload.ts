/** Package Imports */
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Linking } from "react-native";

/** Components/Utils/Styles/Types Imports */
import { getPresignedUrl, notifyUploadComplete, uploadToS3 } from "../services/imageUploader";
import { getDeviceMetadata } from "../utils/deviceUtils";
import { compressImage } from "../utils/imageUtils";

export const useImageUpload = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

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
      const compressed = await compressImage(uri);

      const { preSignedUrl, filename } = await getPresignedUrl(type);

      const file = await fetch(compressed.uri);
      const blob = await file.blob();
      await uploadToS3(preSignedUrl, blob, type);

      const { deviceId, deviceType, userIp } = await getDeviceMetadata();

      await notifyUploadComplete({
        filename,
        s3Key: filename,
        size: blob.size,
        width: compressed.width,
        height: compressed.height,
        deviceId,
        userIp,
        deviceType,
      });

      Alert.alert("Upload Success", `File uploaded: ${filename}`);
    } catch (err: any) {
      console.error("Upload Error: ", err);
      Alert.alert("Upload Failed", err.message);
    }
  };

  return { imageUri, setImageUri, pickImage };
};
