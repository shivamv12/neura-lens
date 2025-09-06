import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import styles from './styles/ImageViewer.styles';

const ImageViewer: React.FC<{ imageUri: string | null; onRemove?: () => void; }> = ({ imageUri, onRemove }) => {
  const [modalVisible, setModalVisible] = useState(false);

  if (!imageUri) return null;
  // <Text style={styles.noImageText}>Nothing to process!</Text>;

  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <View style={styles.imageWrapper}>
        {/* Cancel button */}
        {onRemove && (
          <TouchableOpacity style={styles.cancelButton} onPress={onRemove}>
            <MaterialIcons name="close" size={20} color="white" />
          </TouchableOpacity>
        )}

        {/* Image */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.8}
        >
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Fullscreen modal */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)}>
            <Image
              source={{ uri: imageUri }}
              style={styles.fullscreenImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ImageViewer;
