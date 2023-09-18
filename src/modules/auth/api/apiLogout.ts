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
  params?: LogoutRequest
): Promise<LogoutResponse> => {
  let response = {} as LogoutResponse;
  try {
    const response = await rest.post(
      QUERY_KEY_LOGOUT,
      false,
      objToFormData(params)
    );
  } catch (error) {}

  rest.removeTokens();

  if (global?.window) {
    global.window.location.href = "/";
  }

  queryClient.clear();

  return response;
};

export default apiLogout;
