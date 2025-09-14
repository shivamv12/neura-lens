/** Package Imports */
import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, Line } from "react-native-svg";

/** Components/Utils/Styles/Types Imports */

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}

export const WarningIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="11" stroke="#a94442" strokeWidth="2" fill="none" />
    <Line x1="12" y1="7" x2="12" y2="13" stroke="#a94442" strokeWidth="2" />
    <Circle cx="12" cy="17" r="1.5" fill="#a94442" />
  </Svg>
);
