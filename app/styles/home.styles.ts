import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 12,
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center', // 'flex-start',
    justifyContent: 'center', // 'flex-start',
    flexWrap: 'wrap', // allow text to wrap instead of pushing icon
    gap: 8, // for spacing, or use margin
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // cover scales while preserving aspect ratio
  },
  reactLogoReact: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default styles;
