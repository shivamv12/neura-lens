/** Package Imports */
import { SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

/** Components/Utils/Styles/Types Imports */
// Fallback for using MaterialIcons on Android and web.
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type IconMapping = Record<string, ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  // Navigation
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',

  // User / Account
  'person.fill': 'person',
  'person.crop.circle.fill': 'account-circle',

  // Files / Uploads
  'square.and.arrow.up': 'file-upload',
  'arrow.up.circle.fill': 'upload',
  'doc.text.fill': 'description',
  'folder.fill': 'folder',

  // Success / Confirmation
  'checkmark.circle.fill': 'check-circle',
  'checkmark.seal.fill': 'verified',

  // Warnings / Errors
  'exclamationmark.triangle.fill': 'warning',
  'exclamationmark.circle.fill': 'error',
  'xmark.circle.fill': 'cancel',

  // Misc / Actions
  'trash.fill': 'delete',
  'pencil': 'edit',
  'gear': 'settings',
  'bell.fill': 'notifications',
  'questionmark.circle.fill': 'help',

  // Lens / Detection
  'viewfinder': 'photo-camera',      // camera/lens symbol
  'viewfinder.circle.fill': 'camera-alt', // filled version
  'magnifyingglass.circle.fill': 'search', // alternative for detection
  'search': 'search',
  'search.sparkle': 'star',

  // Hourglass
  'hourglass': 'hourglass-top', // mapped to MaterialIcons equivalent
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
