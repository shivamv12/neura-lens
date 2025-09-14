/** Package Imports */

/** Components/Utils/Styles/Types Imports */
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/common/ParallaxScrollView';
import { IconSymbol } from '@/components/common/ui/IconSymbol';
import { FC } from 'react';
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Uploads - Coming Soon 🚀</ThemedText>
      </ThemedView>

      <ThemedText style={{ textAlign: 'center', marginVertical: 20 }}>
        We're working hard to bring you the Uploads & Gallery feature in Phase 2! Stay tuned for AI-powered image management and analysis.
      </ThemedText>

      <ThemedView style={{ alignItems: 'center', marginTop: 30 }}>
        <IconSymbol size={120} name="cloud-upload" color="#A0A0A0" />
        <ThemedText style={{ marginTop: 15 }}>Feature in development</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default Uploads;
