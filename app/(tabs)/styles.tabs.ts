import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
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
  },
  reactLogoReact: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export const uploadsStyles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
