// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiLogout,
  LogoutRequest,
  LogoutResponse,
  QUERY_KEY_LOGOUT,
} from "../apiLogout";

// Request hook
export const useLogout = (
  defParams?: LogoutRequest,
  options?: UseMutationOptions<LogoutResponse, RequestError, LogoutRequest>
) =>
  useMutation<LogoutResponse, RequestError, LogoutRequest>({
    mutationKey: QUERY_KEY_LOGOUT,
    mutationFn: (params: LogoutRequest) =>
      apiLogout({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useLogout;
