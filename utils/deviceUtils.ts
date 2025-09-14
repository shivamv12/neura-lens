/** Package Imports */
import * as Device from "expo-device";
import * as Network from "expo-network";
import { Alert, Platform } from "react-native";

/** Components/Utils/Styles/Types Imports */
type AlertAction = { text: string; onPress?: () => void; style?: "default" | "cancel" | "destructive"; };

export const getDeviceMetadata = async () => {
  const deviceId = Device.deviceName || Device.modelName || "unknown-device";
  const deviceType = Device.osName || Platform.OS;
  const userIp = await Network.getIpAddressAsync();

  return { deviceId, deviceType, userIp };
};

export const showAlertOnDevice = (
  title: string,
  message: string,
  actions: AlertAction[] = [{ text: "OK" }]
) => {
  Alert.alert(title, message, actions);
};
