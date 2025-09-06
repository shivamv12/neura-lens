import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { FC, useState } from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import ImageViewer from './ImageViewer';

const ImageUploader: FC<{ inline?: boolean }> = ({ inline }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Request permissions for both camera and gallery
  const requestCameraPermission = async () => {
    const cameraStatus = await ImagePicker.getCameraPermissionsAsync();
    if (cameraStatus.canAskAgain) {
      const request = await ImagePicker.requestCameraPermissionsAsync();
      return request.status === 'granted';
    }
    Alert.alert(
      'Permission required',
      'Please enable camera in Settings.',
      [{ text: 'Cancel', style: 'cancel' }, { text: 'Open Settings', onPress: () => Linking.openSettings() }]
    );
    return false;
  };

  const requestMediaPermission = async () => {
    const mediaStatus = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (mediaStatus.canAskAgain) {
      const request = await ImagePicker.requestMediaLibraryPermissionsAsync();
      return request.status === 'granted';
    }
    Alert.alert(
      'Permission required',
      'Please enable gallery access in Settings.',
      [{ text: 'Cancel', style: 'cancel' }, { text: 'Open Settings', onPress: () => Linking.openSettings() }]
    );
    return false;
  };

  const pickImageFromGallery = async () => {
    const hasPermission = await requestMediaPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const takePhotoWithCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const uploadImage = async () => {
    if (!imageUri) return Alert.alert('No image selected');

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'upload.jpg',
    } as any);

    try {
      const res = await fetch('https://your-backend.com/upload', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const data = await res.json();
      Alert.alert('Upload Success', JSON.stringify(data));
    } catch (err) {
      Alert.alert('Upload Failed', JSON.stringify(err));
    }
  };

  return (
    <View style={{ alignItems: 'center', marginLeft: 0 }}>
      {/* Buttons in a row */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 18 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#4A90E2',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 8,
          }}
          onPress={pickImageFromGallery}
        >
          <MaterialIcons name="photo-library" size={20} color="white" />
          <Text style={{ color: 'white', marginLeft: 6 }}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#4A90E2',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 8,
          }}
          onPress={takePhotoWithCamera}
        >
          <MaterialIcons name="photo-camera" size={20} color="white" />
          <Text style={{ color: 'white', marginLeft: 6 }}>Camera</Text>
        </TouchableOpacity>
      </View>

      <ImageViewer imageUri={imageUri} onRemove={() => setImageUri(null)} />
    </View>
  );
};

export default ImageUploader;
