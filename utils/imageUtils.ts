/** Package Imports */
import * as ImageManipulator from "expo-image-manipulator";

/** Components/Utils/Styles/Types Imports */


export const compressImage = async (uri: string) => {
  return ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 1080 } }],
    { compress: 0.8, format: ImageManipulator.SaveFormat.PNG }
  );
};
