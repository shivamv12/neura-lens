import { Image } from 'expo-image';

import { AICameraIcon } from '@/components/AICameraIcon';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import styles from '../styles/home.styles';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/robo-stand.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Welcome Section */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Neura Lens</ThemedText>
        <AICameraIcon />
      </ThemedView>

      {/* Step 1: Capture/Upload */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Capture or Upload</ThemedText>
        <ThemedText>
          Take a photo with your camera or upload an image from your gallery to get started.
        </ThemedText>
      </ThemedView>

      {/* Step 2: AI Analysis */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: AI Analysis</ThemedText>
        <ThemedText>
          NeuraLens will process your image using cutting-edge AI models to detect, analyze, and
          interpret key features in real-time.
        </ThemedText>
      </ThemedView>

      {/* Step 3: Insights */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get Insights</ThemedText>
        <ThemedText>
          Receive instant insights and actionable information, right at your fingertips.
        </ThemedText>
      </ThemedView>

      {/* Developer Tools (keep for dev mode only) */}
      {/* {__DEV__ && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Developer Tools</ThemedText>
          <ThemedText>
            Press{' '}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: 'cmd + d',
                android: 'cmd + m',
                web: 'F12',
              })}
            </ThemedText>{' '}
            to open developer tools.
          </ThemedText>
        </ThemedView>
      )} */}
    </ParallaxScrollView>
  );
}
