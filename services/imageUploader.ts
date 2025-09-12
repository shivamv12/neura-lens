/** Package Imports */
import axios from "axios";

/** Components/Utils/Styles/Types Imports */
import { ENDPOINTS, getServerEndpoint } from "../config/api.config";

export const getPresignedUrl = async (contentType: string | null) => {
  const res = await axios.post(getServerEndpoint(ENDPOINTS.PRESIGNED_URL), {
    contentType,
  });
  return res.data.data; // { preSignedUrl, filename }
};

export const uploadToS3 = async (
  preSignedUrl: string,
  blob: Blob,
  contentType: string | null
) => {
  return axios.put(preSignedUrl, blob, {
    headers: {
      "Content-Type": contentType || "application/octet-stream",
      "x-amz-server-side-encryption": "AES256",
    },
  });
};

export const notifyUploadComplete = async (payload: any) => {
  return axios.post(getServerEndpoint(ENDPOINTS.UPLOAD_COMPLETE), payload);
};
