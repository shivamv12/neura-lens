/** Package Imports */
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React, { FC } from 'react';
import { Platform } from 'react-native';

/** Components/Utils/Styles/Types Imports */
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/common/ui/IconSymbol';
import TabBarBackground from '@/components/common/ui/TabBarBackground';
import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const TabLayout: FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Analyzer',
          tabBarIcon: ({ color }: { color: string }) => <MaterialIcons size={28} name="image-search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="uploads"
        options={{
          title: 'Uploads',
          tabBarIcon: ({ color }: { color: string }) => <MaterialIcons size={28} name="filter-list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }: { color: string }) => <IconSymbol size={28} name="viewfinder" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
