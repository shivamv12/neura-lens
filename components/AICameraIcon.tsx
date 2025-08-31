import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './styles/AICameraIcon.styles';

const AICameraIcon: FC = () => {
  return (
    <View style={styles.iconWrapper}>
      <Ionicons name="camera" size={80} color="#4A90E2" />
      <Ionicons
        name="sparkles-outline" // if not available, fallback: "ios-star"
        size={35}
        color="#FFD700"
        style={styles.sparkle}
      />
    </View>
  );
};

export { AICameraIcon };
