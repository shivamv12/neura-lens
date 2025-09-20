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

export const aboutStyles = StyleSheet.create({
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
  // headerImage: {
  //   marginTop: 50,
  //   opacity: 0.3,
  // },
  uploadRow: {
    justifyContent: 'space-between', // optional
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: -10,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  uploadRowImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  uploadRowContent: {
    flex: 1,
    justifyContent: 'center',
  },
  uploadFilename: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
  },
  uploadTime: {
    fontSize: 12,
    color: '#888',
    marginTop: -5,
  },
  uploadStatus: {
    fontSize: 12,
    fontWeight: '600',
    marginRight: 12,
    minWidth: 60,
    textAlign: 'right',
  },
});
