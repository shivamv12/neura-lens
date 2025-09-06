
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import styles from '../styles/uploads.styles';

export default function TabTwoScreen() {
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
        <ThemedText type="title">What is Neura Lens ✨</ThemedText>
      </ThemedView>

      <ThemedText>
        Neura Lens helps you capture, upload, and analyze your images in real-time using AI-powered
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
          Use the built-in camera or gallery picker to upload images. Neura Lens automatically optimizes
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
          Neura Lens automatically adapts to your device theme. Enjoy a seamless experience in both light
          and dark modes.
        </ThemedText>
      </Collapsible>

    </ParallaxScrollView>
  );
}
