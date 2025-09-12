import { StyleSheet } from 'react-native';

export const AICameraIconStyles = StyleSheet.create({
  iconWrapper: {
    width: 100, // or dynamically based on icon size
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // important for absolute positioning inside
    marginLeft: -16,
  },
  sparkle: {
    position: 'absolute',
    top: 0,   // relative to iconWrapper
    right: 0, // relative to iconWrapper
  },
});

export const ThemedTextStyles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
