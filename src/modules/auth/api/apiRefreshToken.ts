// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";

// Constants
export const QUERY_KEY_REFRESH_TOKEN = "/auth/refresh-token";

// Types
export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface RefreshTokenResponse {
  token: string;
  refresh_token: string;
}

// Api function
export const apiRefreshToken = async (
  data: RefreshTokenRequest
): Promise<RefreshTokenResponse> => {
  const response = await rest.post(
    QUERY_KEY_REFRESH_TOKEN,
    false,
    objToFormData(data)
  );

  return response;
};

export default apiRefreshToken;
