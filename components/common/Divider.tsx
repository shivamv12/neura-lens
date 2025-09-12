/** Package Imports */
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

/** Components/Utils/Styles/Types Imports */
import { dividerStyles as styles } from './styles.common';

const Divider: FC<{ color?: string; thickness?: number; margin?: number }> = ({
  color = '#ccc',
  thickness = StyleSheet.hairlineWidth,
  margin = 8,
}) => {
  return <View style={[styles.divider, { borderBottomColor: color, borderBottomWidth: thickness, marginVertical: margin }]} />;
};

export default Divider;
