/** Package Imports */
import * as Device from "expo-device";
import * as Network from "expo-network";
import { Platform } from "react-native";

/** Components/Utils/Styles/Types Imports */

export const getDeviceMetadata = async () => {
  const deviceId = Device.deviceName || Device.modelName || "unknown-device";
  const deviceType = Device.osName || Platform.OS;
  const userIp = await Network.getIpAddressAsync();

  return { deviceId, deviceType, userIp };
};
