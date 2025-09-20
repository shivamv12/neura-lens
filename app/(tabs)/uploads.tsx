/** Package Imports */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Image } from "expo-image";
import { FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

/** Components/Utils/Styles/Types Imports */
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/common/ParallaxScrollView';
import { IconSymbol } from '@/components/common/ui/IconSymbol';
import { DEVICE_IMAGE_PREFIX } from "@/constants/appConstants";
import { fetchDeviceSpecificUploads } from "@/services/imageUploader";
import { uploadsStyles as styles } from '../styles/styles.tabs';

dayjs.extend(relativeTime);

interface UploadedFile { filename: string; cdnAccessLink: string; uploadedAt: string; status: 'success' | 'failed' | 'pending'; };

const Uploads: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploads, setUploads] = useState<UploadedFile[]>([]);

  useEffect(() => {
    const loadUploads = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const files = await fetchDeviceSpecificUploads();
        setUploads(files);
      } catch (err: any) {
        console.error("Error fetching uploads:", err);
        setError(err.message || "Failed to fetch your uploads!");
      } finally {
        setIsLoading(false);
      }
    };
    loadUploads();
  }, []);

  /** Render each upload as a card/row */
  const renderUploadRow = (item: UploadedFile, index: number) => {
    const statusColor =
      item.status === 'success' ? 'green' : item.status === 'failed' ? 'red' : 'orange';

    return (
      <Animated.View key={item.filename ?? `${DEVICE_IMAGE_PREFIX}${index}`} style={styles.uploadRow}>
        <Image source={{ uri: item.cdnAccessLink }} style={styles.uploadRowImage} />
        <View style={[styles.uploadRowContent, { flex: 1 }]}>
          <ThemedText style={styles.uploadFilename}>{item.filename ?? `${DEVICE_IMAGE_PREFIX}${index}`}</ThemedText>
          <ThemedText style={styles.uploadTime}>{dayjs(item.uploadedAt).fromNow()}</ThemedText>
        </View>
        <ThemedText style={[styles.uploadStatus, { color: statusColor }]}>{item.status?.toUpperCase()}</ThemedText>
        <TouchableOpacity>
          <IconSymbol name="trash.fill" size={20} color="#888" />
        </TouchableOpacity>
      </Animated.View>
    )
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<IconSymbol size={250} color="#808080" name="hourglass" style={styles.headerImage} />}>
      <ThemedView style={{ alignItems: "center", marginTop: 20 }}>
        <ThemedText type="title">Uploads & Gallery 🗂️</ThemedText>
        <ThemedText style={{ textAlign: "center", marginTop: 8, color: "#888" }}>
          NeuraLens keeps your assets safe and organized.
        </ThemedText>

        {isLoading && (
          <ThemedText style={{ marginTop: 20, color: "#888" }}>
            Fetching your uploads...
          </ThemedText>
        )}

        {!isLoading && error && (
          <ThemedText style={{ marginTop: 20, color: "red" }}>{error}</ThemedText>
        )}

        {!isLoading && !uploads.length && !error && (
          <ThemedText style={{ marginTop: 20, color: "#888" }}>
            No uploads found for this device.
          </ThemedText>
        )}

        {!isLoading && uploads.length ? (
          <ThemedView style={{ width: '100%', marginTop: 20 }}>
            {uploads.map((item: any, index: number) => item ? renderUploadRow(item, index) : null)}
          </ThemedView>
        ) : null}
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default Uploads;
