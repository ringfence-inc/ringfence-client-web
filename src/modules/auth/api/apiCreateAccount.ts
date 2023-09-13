// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";

// Constants
export const QUERY_KEY_CREATE_ACCOUNT = "/auth/create-account";

// Types
export interface CreateAccountRequest {
  email: string;
  password: string;
  nick_name: string;
  first_name?: string;
  last_name?: string;
}

export interface CreateAccountResponse {
  token: string;
  refresh_token: string;
}

// Api function
export const apiCreateAccount = async (
  data: CreateAccountRequest
): Promise<CreateAccountResponse> => {
  const response = await rest.post(
    QUERY_KEY_CREATE_ACCOUNT,
    false,
    objToFormData(data)
  );

  return response;
};

export default apiCreateAccount;
