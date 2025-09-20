/** Package Imports */
import { FC } from 'react';

/** Components/Utils/Styles/Types Imports */
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/common/ParallaxScrollView';
import { IconSymbol } from '@/components/common/ui/IconSymbol';
import { uploadsStyles as styles } from '../styles/styles.tabs';

const Uploads: FC = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={250}
          color="#808080"
          name="hourglass"
          style={styles.headerImage}
        />
      }>
      {/* Container for top content */}
      <ThemedView style={{ alignItems: 'center', marginTop: 20 }}>

        {/* Title & Subtitle */}
        <ThemedText type="title">Uploads & Gallery 🗂️</ThemedText>
        <ThemedText type="subtitle" style={{ marginTop: 12, textAlign: 'center', color: '#888' }}>
          Coming Soon with next phase
        </ThemedText>

        {/* Info / Status Section */}
        <ThemedView style={{ alignItems: 'center', marginTop: 10 }}>
          <IconSymbol size={120} name="cloud-upload" color="#A0A0A0" />
          <ThemedText style={{ textAlign: 'center' }}>
            We’re working hard to bring AI-powered image uploads and management.
          </ThemedText>
          <ThemedText style={{ textAlign: 'center', marginTop: 4, color: '#888' }}>
            All your images will be securely stored and instantly analyzable.
          </ThemedText>
        </ThemedView>

      </ThemedView>

      {/* Footer / Note */}
      <ThemedView style={{ alignItems: 'center', marginVertical: 30 }}>
        <ThemedText style={{ textAlign: 'center', color: '#888' }}>
          Stay tuned! Phase 2 is coming soon. Your uploads will be safe, fast, and smart.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
};
