/** Package Imports */
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/** Components/Utils/Styles/Types Imports */
import ImageViewer from "./ImageViewer";

import { ImageRendererStyles as styles } from "./styles.imageUploader";

const ImageRenderer: React.FC<{ imageUri: string | null; onRemove?: () => void; isExplicit?: boolean; }> = ({ imageUri, onRemove, isExplicit = false }) => {
  const [modalVisible, setModalVisible] = useState(false);

  if (!imageUri) return null;

  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <View style={styles.imageWrapper}>
        {/* Cancel button */}
        {onRemove && (
          <TouchableOpacity style={styles.cancelButton} onPress={onRemove}>
            <MaterialIcons name="close" size={20} color="white" />
          </TouchableOpacity>
        )}

        {/* Image with blur overlay if explicit */}
        <View>
          <Image source={{ uri: imageUri }} style={styles.image} onTouchEnd={() => setModalVisible(true)} />
          {isExplicit && (
            <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFill}>
              <View style={styles.overlay}>
                <MaterialIcons name="block" size={32} color="#fff" />
                <Text style={styles.overlayText}>Blurred due to content policy</Text>
              </View>
            </BlurView>
          )}
        </View>
      </View>

      {/* Fullscreen modal (disabled if explicit) */}
      {!isExplicit && modalVisible && (
        <ImageViewer imageUri={imageUri} onClose={() => setModalVisible(false)} />
      )}
    </View>
  );
};

export default ImageRenderer;
