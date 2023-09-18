// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";
import { queryCache } from "@/shared/libs/query";

// Constants
export const QUERY_KEY_LOGIN = "/auth/login";

// Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refresh_token: string;
}

// Api function
export const apiLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await rest.post(QUERY_KEY_LOGIN, false, objToFormData(data));

  const { accessToken, refreshToken } = response;

  rest.setTokens({ token: accessToken, refreshToken });

  queryCache.clear();

  return response;
};

export default apiLogin;
