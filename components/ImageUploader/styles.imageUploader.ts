import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ImageUploaderStyles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    marginLeft: 6,
  },
  buttonDisabled: {
    backgroundColor: "#6C93D6", // darker blue disabled
  },
  buttonTextDisabled: {
    color: "#F0F4FA", // lighter text
  },
  outerViewStyle: {
    alignItems: "center",
  },
  buttonViewBoxStyle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 18,
  },
  analysisViewBoxStyle: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#C4DFFF",
    // backgroundColor: "#E5E7EB",
    borderRadius: 8,
  },
  analysisHeading: {
    fontWeight: "600",
    // fontSize: 18,
    marginBottom: 6,
  },
  analysisText: {
    color: "#344365",
    textAlign: "justify",
    padding: 12
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },
  listItem: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 2,
  },
  warningBox: {
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff4f4",
    borderWidth: 1,
    borderColor: "#f5c2c2",
    alignItems: "center"
  },
  warningIcon: {
    fontSize: 50,
    marginBottom: 8,
    color: "#a94442",
  },
  warningText: {
    fontSize: 15,
    color: "#a94442",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 22,
  },
  secondaryWarningText: {
    fontSize: 12,
    color: "#a94442",
    marginTop: 12,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export const ImageRendererStyles = StyleSheet.create({
  imageWrapper: {
    position: "relative",
    borderWidth: 2,
    borderColor: "#FFD700",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cancelButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 12,
    padding: 2,
    zIndex: 2,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "#fff",
    marginTop: 6,
    fontSize: 12,
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenImage: {
    width: "99%",
    height: "90%",
    resizeMode: "contain",
  },
});
