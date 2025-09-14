/** Package Imports */
import { FC } from 'react';

/** Components/Utils/Styles/Types Imports */
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/common/Collapsible';
import ParallaxScrollView from '@/components/common/ParallaxScrollView';
import { IconSymbol } from '@/components/common/ui/IconSymbol';

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
      {/* Title Section */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">What is NeuraLens ✨</ThemedText>
      </ThemedView>

      <ThemedText>
        NeuraLens helps you capture, upload, and analyze your images in real-time using AI-powered processing. 🧠
      </ThemedText>

      {/* ================================= */}
      {/* Phase 1 - Developed Features      */}
      {/* ================================= */}
      <ThemedView style={{ marginTop: 20, marginBottom: 10 }}>
        <ThemedText type="subtitle">🎯 Current Features (Phase 1)</ThemedText>
      </ThemedView>

      <Collapsible title="📸 Capture & Upload">
        <ThemedText>
          Use the built-in camera or gallery picker to upload images. NeuraLens automatically optimizes
          your uploads and prepares them for instant analysis.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🔮 AI Processing">
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
          NeuraLens (for now) automatically adapts to your device theme. Enjoy a seamless experience in both light and dark modes.
        </ThemedText>
      </Collapsible>

      {/* ================================= */}
      {/* Phase 2 - Planned / Coming Soon   */}
      {/* ================================= */}
      <ThemedView style={{ marginTop: 20, marginBottom: 10 }}>
        <ThemedText type="subtitle">🚀 Planned Features (Phase 2)</ThemedText>
      </ThemedView>

      <Collapsible title="📂 Previous Uploads">
        <ThemedText>
          Soon, you'll be able to view and manage your previously uploaded files. All your images will be securely stored and accessible anytime.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🌙 Manual Dark Mode Switching">
        <ThemedText>
          NeuraLens will allow users to manually switch between light and dark modes in addition to the automatic device theme detection.
        </ThemedText>
      </Collapsible>

      <Collapsible title="📱 Orientation Support">
        <ThemedText>
          NeuraLens will support both portrait and landscape orientations for an optimized viewing experience.
        </ThemedText>
      </Collapsible>

      <Collapsible title="⛓️ Batch Reprocessing & Notifications">
        <ThemedText>
          Failed image uploads will be automatically reprocessed in batches. Users will receive a push notification when their previously failed images have been successfully re-analyzed.
        </ThemedText>
      </Collapsible>

      {/* ================================= */}
      {/* Content Guidelines (Independent)  */}
      {/* ================================= */}
      <ThemedView style={{ marginTop: 20, marginBottom: 10 }}>
        <ThemedText type="subtitle">🛡️ Content Guidelines</ThemedText>
      </ThemedView>

      <Collapsible title="📜 Upload Restrictions">
        <ThemedText>
          To maintain a safe and respectful environment, NeuraLens blocks uploads containing:
        </ThemedText>
        <ThemedText>{'\n'}• Explicit or sexually suggestive content</ThemedText>
        <ThemedText>• Violent or graphic imagery</ThemedText>
        <ThemedText>• Hate symbols, extremist or discriminatory content</ThemedText>
        <ThemedText>• Illegal activities or harmful content</ThemedText>
        <ThemedText>• Personally identifiable information (sensitive documents, IDs, etc.)</ThemedText>
        <ThemedText>{'\n'}Ensure your uploads comply with these guidelines to avoid restrictions.</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
};

export default About;
