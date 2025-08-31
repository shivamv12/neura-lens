import { Image } from 'expo-image';

import { AICameraIcon } from '@/components/AICameraIcon';
import Divider from '@/components/Divider';
import ImageUploader from '@/components/ImageUploader';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { TextSection } from '@/components/TextSection';
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
      <TextSection type="title" text="Welcome to Neura Lens" styles={styles}>
        <AICameraIcon />
      </TextSection>

      {/* Step 1: Capture/Upload */}
      <TextSection
        styles={styles}
        type="subtitle"
        text="Step 1: Capture or Upload"
        description="Take a photo with your camera or upload an image from your gallery to get started."
      />

      {/* Step 2: AI Analysis */}
      <TextSection
        styles={styles}
        type="subtitle"
        text="Step 2: AI Analysis"
        description="NeuraLens will process your image using cutting-edge AI models to detect, analyze, and interpret key features in real-time."
      />

      {/* Step 3: Insights */}
      <TextSection
        styles={styles}
        type="subtitle"
        text="Step 3: Get Insights"
        description="Receive instant insights and actionable information, right at your fingertips."
      />

      <Divider />

      {/* Step 4: Image Picker */}
      <TextSection type="subtitle" text="Pick an Image" />
      <TextSection styles={styles}>
        <ImageUploader />
      </TextSection>

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
