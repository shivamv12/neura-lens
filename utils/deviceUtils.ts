/** Package Imports */
import { DEFAULT_MAC, DEVICE_STORAGE_KEY, DEVICE_TYPES, NULLISH_STRINGS } from "@/constants/appConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Application from "expo-application";
import * as Device from "expo-device";
import * as Network from "expo-network";
import * as SecureStore from "expo-secure-store";
import { Alert, Platform } from "react-native";
import { v4 as uuidv4 } from "uuid";

/** Components/Utils/Styles/Types Imports */
type AlertAction = { text: string; onPress?: () => void; style?: "default" | "cancel" | "destructive"; };

/**
 * Retrieves device metadata including unique identifier, OS type, and IP address.
 *
 * @returns {Promise<{ deviceUniqueId: string; deviceType: string; userIp: string }>} Object containing device metadata
 */
export const getDeviceMetadata = async () => {
  const deviceUniqueId = await getDeviceUniqueIdentifier();
  const deviceType = Device.osName || Platform.OS;
  const userIp = await Network.getIpAddressAsync();

  return { deviceUniqueId, deviceType, userIp };
};

/**
 * Displays a native alert on the device.
 *
 * @param {string} title - The title of the alert
 * @param {string} message - The alert message
 * @param {AlertAction[]} actions - Array of action buttons (default: [{ text: "OK" }])
 */
export const showAlertOnDevice = (
  title: string,
  message: string,
  actions: AlertAction[] = [{ text: "OK" }]
) => {
  Alert.alert(title, message, actions);
};

/**
 * Retrieves a fallback UUID stored locally or generates a new one if not present.
 *
 * @returns {Promise<string>} Stable UUID stored in AsyncStorage or SecureStore
 */
const getFallbackId = async (): Promise<string> => {
  let stored: string | null = null;

  if (isDeviceWeb) {
    stored = await AsyncStorage.getItem(DEVICE_STORAGE_KEY);
    if (!stored) {
      stored = uuidv4();
      await AsyncStorage.setItem(DEVICE_STORAGE_KEY, stored);
    }
  } else {
    stored = await SecureStore.getItemAsync(DEVICE_STORAGE_KEY);
    if (!stored) {
      stored = uuidv4();
      await SecureStore.setItemAsync(DEVICE_STORAGE_KEY, stored);
    }
  }

  return stored;
};

/**
 * Generates or retrieves a stable, unique identifier for the device.
 *
 * Priority order:
 *  1. Platform-specific device ID (Android: `getAndroidId()`, iOS: `getIosIdForVendorAsync()`)
 *  2. Persisted fallback UUID (via SecureStore / AsyncStorage)
 *  3. Instant fallback string (non-persistent, last resort)
 *
 * @returns {Promise<string>} Device unique identifier
 */
export const getDeviceUniqueIdentifier = async (): Promise<string> => {
  try {
    let deviceUniqueId: string | null = null;

    if (isDeviceAndroid) {
      deviceUniqueId = Application.getAndroidId();
    } else if (isDeviceIOS) {
      deviceUniqueId = await Application.getIosIdForVendorAsync();
    }

    if (!deviceUniqueId || [DEFAULT_MAC, NULLISH_STRINGS.UNDEFINED].includes(deviceUniqueId))
      deviceUniqueId = await getFallbackId();

    return deviceUniqueId;
  } catch (err) {
    console.warn("Error getting device ID:", err);

    // Last resort: generate a simple string based on device info
    let identifierStr: string = DEVICE_STORAGE_KEY;
    if (Device.deviceName) identifierStr += `-${Device.deviceName}`;
    if (Device.modelName) identifierStr += `-${Device.modelName}`;

    return identifierStr;
  }
};

export const isDeviceIOS = Platform.OS === DEVICE_TYPES.IOS;
export const isDeviceWeb = Platform.OS === DEVICE_TYPES.WEB;
export const isDeviceAndroid = Platform.OS === DEVICE_TYPES.ANDROID;
