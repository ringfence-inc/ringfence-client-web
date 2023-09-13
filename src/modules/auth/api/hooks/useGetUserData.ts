// Hooks
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiGetUserData,
  GetUserDataRequest,
  GetUserDataResponse,
  QUERY_KEY_GET_USER_DATA,
} from "../apiGetUserData";

// Request hook
export const useGetUserData = (
  params?: GetUserDataRequest,
  options?: UseQueryOptions<
    GetUserDataResponse,
    RequestError,
    GetUserDataResponse
  >
) =>
  useQuery<GetUserDataResponse, RequestError, GetUserDataResponse>({
    queryKey: [QUERY_KEY_GET_USER_DATA, params],
    queryFn: () => apiGetUserData(params as GetUserDataRequest),
    ...(options || ({} as any)),
  });

export default useGetUserData;
