// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";

// Constants
export const QUERY_KEY_SET_NEW_PASSWORD = "/auth/set-new-password";

// Types
export interface SetNewPasswordRequest {
  password: string;
  code: string;
}

export interface SetNewPasswordResponse {
  success: true;
}

// Api function
export const apiSetNewPassword = async (
  data: SetNewPasswordRequest
): Promise<SetNewPasswordResponse> => {
  const response = await rest.post(
    QUERY_KEY_SET_NEW_PASSWORD,
    false,
    objToFormData(data)
  );

  return response;
};

export default apiSetNewPassword;
