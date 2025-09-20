export const ENDPOINTS = {
  GET_UPLOADS: "/api/media/uploads",
  PRESIGNED_URL: "/api/media/presigned-url",
  UPLOAD_COMPLETE: "/api/media/uploads/complete",
  SERVER_API_BASE: "https://unmuttered-unsartorially-jayne.ngrok-free.app",
};

/**
 * Builds a full server URL with optional query parameters.
 * @param path API endpoint path (e.g., ENDPOINTS.UPLOADS)
 * @param queryParams Optional object of key-value pairs
 * @returns Complete URL string
 */
export const buildServerEndpoint = (path: string, queryParams?: Record<string, string | number | boolean>) => {
  const url = new URL(`${ENDPOINTS.SERVER_API_BASE}${path}`);
  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  return url.toString();
};
