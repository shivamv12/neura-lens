import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

export default styles;
