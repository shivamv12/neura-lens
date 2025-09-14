/** Package Imports */
import { Image } from 'expo-image';

/** Components/Utils/Styles/Types Imports */
import ImageUploader from '@/components/ImageUploader/ImageUploader';
import { TextSection } from '@/components/TextSection';
import Divider from '@/components/common/Divider';
import ParallaxScrollView from '@/components/common/ParallaxScrollView';
import { FC } from 'react';
import { homeStyles as styles } from '../styles/styles.tabs';

const HomeScreen: FC = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/robo-stand.png')}
          style={styles.reactLogo}
        />
      }>

      {/* Top Heading Section */}
      <TextSection type="title" text="NeuraLens ✨" direction="row" styles={styles} />

      {/* Step 0: Image Picker */}
      <ImageUploader inline />

      {/* Few Icons and Separator */}
      {/* <Divider /> */}
      {/* <AICameraIcon /> */}

      {/* Step 1: Capture/Upload */}
      <TextSection
        styles={styles}
        type="subtitle"
        text="📸  Capture or Upload"
        description="Take a photo with your camera or upload an image from your gallery to get started."
      />

      {/* Step 2: Text: AI Analysis */}
      <TextSection
        styles={styles}
        type="subtitle"
        text="🤖  AI Analysis"
        description="NeuraLens will process your image using cutting-edge AI models to detect, analyze, and interpret key features in real-time."
      />

      {/* Step 3: Text: Insights */}
      <TextSection
        styles={styles}
        type="subtitle"
        text="⚙️  Get Insights"
        description="Receive instant insights and actionable information, right at your fingertips."
      />

      <Divider />

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

export default HomeScreen;
