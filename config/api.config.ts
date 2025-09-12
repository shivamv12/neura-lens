export const ENDPOINTS = {
  PRESIGNED_URL: "/api/media/presigned-url",
  UPLOAD_COMPLETE: "/api/media/upload-complete",
  SERVER_API_BASE: "https://unmuttered-unsartorially-jayne.ngrok-free.app",
};

export const getServerEndpoint = (path: string) => `${ENDPOINTS.SERVER_API_BASE}${path}`;
