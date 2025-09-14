/** Package Imports */

/** Components/Utils/Styles/Types Imports */
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/common/Collapsible';
import ParallaxScrollView from '@/components/common/ParallaxScrollView';
import { IconSymbol } from '@/components/common/ui/IconSymbol';
import { FC } from 'react';
import { aboutStyles as styles } from '../styles/styles.tabs';

const About: FC = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="magnifyingglass.circle.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">What is NeuraLens ✨</ThemedText>
      </ThemedView>

      <ThemedText>
        NeuraLens helps you capture, upload, and analyze your images in real-time using AI-powered
        processing. 🚀
      </ThemedText>

      <Collapsible title="📂 Previous Uploads">
        <ThemedText>
          View and manage your previously uploaded files. All your images are securely stored and can be
          accessed anytime.
        </ThemedText>
      </Collapsible>

      <Collapsible title="📸 Capture & Upload">
        <ThemedText>
          Use the built-in camera or gallery picker to upload images. NeuraLens automatically optimizes
          your uploads and prepares them for instant analysis.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🤖 AI Processing">
        <ThemedText>
          Once uploaded, our AI engine processes your images to extract insights. Results are displayed in
          a clean and interactive format.
        </ThemedText>
      </Collapsible>

      <Collapsible title="⚡ Fast & Secure">
        <ThemedText>
          With optimized backend APIs and secure cloud integration, your data remains private and
          processing is lightning fast.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🌙 Dark Mode Support">
        <ThemedText>
          NeuraLens automatically adapts to your device theme. Enjoy a seamless experience in both light
          and dark modes.
        </ThemedText>
      </Collapsible>

      {/* ✅ Content Guidelines */}
      <Collapsible title="📜 Content Guidelines">
        <ThemedText>
          To maintain a safe and respectful environment, NeuraLens does not allow uploads containing:
        </ThemedText>
        <ThemedText>{'\n'}• Explicit or sexually suggestive content</ThemedText>
        <ThemedText>• Violent or graphic imagery</ThemedText>
        <ThemedText>• Hate symbols, extremist or discriminatory content</ThemedText>
        <ThemedText>• Illegal activities or harmful content</ThemedText>
        <ThemedText>• Personally identifiable information (sensitive documents, IDs, etc.)</ThemedText>
        <ThemedText>{'\n'}Please ensure your uploads comply with these guidelines to avoid processing restrictions.</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

export default About;
