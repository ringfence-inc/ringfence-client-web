// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";

// Constants
export const QUERY_KEY_LOGIN = "/auth/login";

// Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refresh_token: string;
}

// Api function
export const apiLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await rest.post(QUERY_KEY_LOGIN, false, objToFormData(data));

  rest.setTokens(response || {});

  return response;
};

export default apiLogin;
