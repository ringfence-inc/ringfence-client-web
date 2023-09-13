// Utils
import rest from "@/shared/api";

// Constants
export const QUERY_KEY_GET_USER_DATA = "/org/get-user-data";

// Types
export interface GetUserDataRequest {}

export interface GetUserDataResponse {
  email: string;
  password: string;
  nick_name: string;
  first_name: string;
  last_name: string;
}

// Api function
export const apiGetUserData = async (
  data: GetUserDataRequest
): Promise<GetUserDataResponse> => {
  return await rest.post(QUERY_KEY_GET_USER_DATA, true, {});
};

export default apiGetUserData;
