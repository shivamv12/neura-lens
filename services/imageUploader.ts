/** Package Imports */
import axios from "axios";

/** Components/Utils/Styles/Types Imports */
import { getDeviceMetadata } from "@/utils/deviceUtils";
import { ENDPOINTS, buildServerEndpoint } from "../config/api.config";

export const getPresignedUrl = async (contentType: string | null) => {
  try {
    const res = await axios.post(buildServerEndpoint(ENDPOINTS.PRESIGNED_URL), { contentType });
    return res.data.data; // { preSignedUrl, filename }
  } catch (err: any) {
    console.error("Error getting pre-signed url:", err);
    throw err;
  }
};

export const uploadToS3 = async (
  preSignedUrl: string,
  blob: Blob,
  contentType: string | null
) => {
  try {
    return fetch(preSignedUrl, {
      headers: {
        "Content-Type": contentType || "application/octet-stream",
        "x-amz-server-side-encryption": "AES256",
      },
      body: blob,
      method: "PUT",
    });
  } catch (err: any) {
    console.error("Error fetching uploads:", err);
    throw err;
  }
};

export const notifyUploadComplete = async (payload: any) => {
  return axios.post(buildServerEndpoint(ENDPOINTS.UPLOAD_COMPLETE), payload);
};

export const fetchDeviceSpecificUploads = async () => {
  try {
    const { deviceUniqueId } = await getDeviceMetadata();
    const url = buildServerEndpoint(ENDPOINTS.GET_UPLOADS, { deviceId: deviceUniqueId });
    const response = await axios.get(url);

    // response.data.data.files contains the uploaded files
    return response.data?.data?.files || [];
  } catch (err: any) {
    console.error("Error fetching uploads:", err);
    throw err;
  }
};
