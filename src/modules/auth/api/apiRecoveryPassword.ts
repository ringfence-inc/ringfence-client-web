// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";

// Constants
export const QUERY_KEY_RECOVERY_PASSWORD = "/auth/recovery-password";

// Types
export interface RecoveryPasswordRequest {
  email: string;
}

export interface RecoveryPasswordResponse {
  success: true;
}

// Api function
export const apiRecoveryPassword = async (
  data: RecoveryPasswordRequest
): Promise<RecoveryPasswordResponse> => {
  const response = await rest.post(
    QUERY_KEY_RECOVERY_PASSWORD,
    false,
    objToFormData(data)
  );

  return response;
};

export default apiRecoveryPassword;
