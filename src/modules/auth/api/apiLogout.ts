// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";
import queryClient from "@/shared/libs/query";

// Constants
export const QUERY_KEY_LOGOUT = "/auth/logout";

// Types
export interface LogoutRequest {}

export interface LogoutResponse {
  success: boolean;
}

// Api function
export const apiLogout = async (
  params?: LogoutRequest
): Promise<LogoutResponse> => {
  let response = {} as LogoutResponse;
  try {
    const response = await rest.get(QUERY_KEY_LOGOUT, true, {});
  } catch (error) {}

  rest.removeTokens();

  if (global?.window) {
    global.window.location.href = "/";
  }

  queryClient.clear();

  return response;
};

export default apiLogout;
