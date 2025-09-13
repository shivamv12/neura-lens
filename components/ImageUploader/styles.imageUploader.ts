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
    marginBottom: 6,
  },
  analysisText: {
    color: "#344365",
    textAlign: "justify",
    padding: 12
  },
});

export const ImageViewerStyles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    borderWidth: 2,
    borderColor: '#FFD700',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
  cancelButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    padding: 2,
    zIndex: 2,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  noImageText: {
    color: '#FFD700',
    marginVertical: 20,
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: width * 0.99,
    height: height * 0.9,
  },
});
