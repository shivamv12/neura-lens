import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const Divider: FC<{ color?: string; thickness?: number; margin?: number }> = ({
  color = '#ccc',
  thickness = StyleSheet.hairlineWidth,
  margin = 8,
}) => {
  return <View style={[styles.divider, { borderBottomColor: color, borderBottomWidth: thickness, marginVertical: margin }]} />;
};

const styles = StyleSheet.create({ divider: { width: '100%', alignSelf: 'center' } });

export default Divider;
