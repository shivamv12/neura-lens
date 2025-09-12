/** Package Imports */
import { MaterialIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

/** Components/Utils/Styles/Types Imports */
import { useImageUpload } from "../../hooks/useImageUpload";
import ImageViewer from "./ImageViewer";

import { ImageUploaderStyles as styles } from "./styles.imageUploader";

const ImageUploader: FC<{ inline?: boolean }> = () => {
  
  const { imageUri, setImageUri, pickImage } = useImageUpload();

  return (
    <View style={styles.outerViewStyle}>
      {/* Buttons */}
      <View style={styles.buttonViewBoxStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => pickImage(false)}>
          <MaterialIcons name="photo-library" size={20} color="white" />
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => pickImage(true)}>
          <MaterialIcons name="photo-camera" size={20} color="white" />
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
      </View>

      <ImageViewer imageUri={imageUri} onRemove={() => setImageUri(null)} />
    </View>
  );
};

export default ImageUploader;
