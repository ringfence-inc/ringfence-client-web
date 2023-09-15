// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";
import queryClient from "@/shared/libs/query";

// Constants
export const QUERY_KEY_LOGOUT = "/auth/logout";

// Types
export interface LogoutRequest {
  user_id: string;
}

export interface LogoutResponse {
  success: boolean;
}

// Api function
export const apiLogout = async (
  params: LogoutRequest
): Promise<LogoutResponse> => {
  const response = await rest.post(
    QUERY_KEY_LOGOUT,
    false,
    objToFormData(params)
  );

  if (global?.window) {
    global.window.location.href = "/";
  }

  rest.setTokens({ token: "", refreshToken: "" });
  queryClient.clear();

  return response as any;
};

export default apiLogout;
