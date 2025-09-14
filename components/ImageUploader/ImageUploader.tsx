/** Package Imports */
import { MaterialIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

/** Components/Utils/Styles/Types Imports */
import { useImageUpload } from "../../hooks/useImageUploader";
import { WarningIcon } from "../common/ui/IconSymbol.ios";
import WaterLoader from "../common/WaterLoader";
import ImageRenderer from "./ImageRenderer";

import { ImageUploaderStyles as styles } from "./styles.imageUploader";

const ImageUploader: FC<{ inline?: boolean }> = () => {
  const {
    loading,
    imageUri,
    pickImage,
    setImageUri,
    quickOverview,
    detailedContext,
    isExplicitContent,
    objectsOrEntities,
  } = useImageUpload();

  return (
    <View style={styles.outerViewStyle}>
      {/* Buttons */}
      <View style={styles.buttonViewBoxStyle}>
        <TouchableOpacity style={[styles.buttonStyle, loading && styles.buttonDisabled]} disabled={!!loading} onPress={() => pickImage(false)}>
          <MaterialIcons name="photo-library" size={20} color={loading ? "#F0F4FA" : "white"} />
          <Text style={[styles.buttonText, loading && styles.buttonTextDisabled]}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonStyle, loading && styles.buttonDisabled]} disabled={!!loading} onPress={() => pickImage(true)}>
          <MaterialIcons name="photo-camera" size={20} color={loading ? "#F0F4FA" : "white"} />
          <Text style={[styles.buttonText, loading && styles.buttonTextDisabled]}>Camera</Text>
        </TouchableOpacity>
      </View>

      {/* Picked/Captured Image */}
      <ImageRenderer isExplicit={isExplicitContent} imageUri={imageUri} onRemove={() => setImageUri(null)} />

      {/* Image AI Analysis Section */}
      {loading ? (
        <>
          {/* Water waves Loader */}
          <WaterLoader />
        </>
      ) : quickOverview ? (
        <>
          {/* Explicit Content Warning */}
          {isExplicitContent ? (
            <View style={styles.warningBox}>
              <Text style={styles.warningIcon}><WarningIcon/></Text>
              <Text style={styles.warningText}>
                This image could not be processed due to detected explicit or sensitive content and therefore does not comply with our content guidelines.
              </Text>
              <Text style={styles.secondaryWarningText}>
                *Your image has been completely removed from the system.
              </Text>
            </View>
          ) : (
            // Analysis Result
            <View style={styles.analysisViewBoxStyle}>
              <Text style={styles.analysisHeading}>✨ Through Neura's Lens..</Text>
              <Text style={styles.analysisText}>{quickOverview}</Text>

              {/* Objects List */}
              {objectsOrEntities?.length > 0 && (
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.subHeading}>📌 What Neura Spotted..</Text>
                  {objectsOrEntities.map((obj: string, index: number) => (
                    <Text key={index} style={styles.listItem}>
                      • {obj}
                    </Text>
                  ))}
                </View>
              )}

              {/* Detailed Context */}
              {detailedContext ? (
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.subHeading}>🌌 Neura's Perspective..</Text>
                  <Text style={styles.analysisText}>{detailedContext}</Text>
                </View>
              ) : null}

            </View>
          )}
        </>
      ) : null}
    </View>
  );
};

export default ImageUploader;
