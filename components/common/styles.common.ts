import { HEADER_HEIGHT } from "@/constants/appConstants";
import { StyleSheet } from "react-native";

export const collapsibleStyles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});

export const dividerStyles = StyleSheet.create({
  divider: {
    width: '100%',
    alignSelf: 'center'
  }
});

export const ParallaxScrollViewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 29,
    gap: 16,
    overflow: 'hidden',
  },
});