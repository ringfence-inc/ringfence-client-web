// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";

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
  data: LogoutRequest
): Promise<LogoutResponse> => {
  return await rest.post(QUERY_KEY_LOGOUT, false, objToFormData(data));
};

export default apiLogout;
