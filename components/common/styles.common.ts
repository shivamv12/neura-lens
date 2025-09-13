import { HEADER_HEIGHT } from "@/constants/appConstants";
import { StyleSheet } from "react-native";

export const collapsibleStyles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});

export const dividerStyles = StyleSheet.create({
  divider: {
    width: "100%",
    alignSelf: "center"
  }
});

export const ParallaxScrollViewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 29,
    gap: 16,
    overflow: "hidden",
  },
});

export const WaterLoaderStyles = StyleSheet.create({
  analysisViewBoxStyle: {
    width: "100%",
    marginTop: 16,
    padding: 12,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
  },
  waterContainer: {
    height: 120, // bucket height
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 8,
  },
  waterFill: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#B3D4FF", // light theme blue for water
  },
  waterWave: {
    top: -10,
    width: "200%",
    position: "absolute",
  },
  loaderTextWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  progressText: {
    position: "absolute",
    top: 8, // distance from top of container
    width: "100%",
    fontSize: 12,
    color: "#374151",
    textAlign: "center",
  },
  progressPercentage: {
    position: "absolute",
    bottom: 8,
    right: 12,
    fontSize: 12,
    color: "#374151",
  }
});