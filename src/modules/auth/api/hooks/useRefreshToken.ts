// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiRefreshToken,
  RefreshTokenRequest,
  RefreshTokenResponse,
  QUERY_KEY_REFRESH_TOKEN,
} from "../apiRefreshToken";

// Request hook
export const useRefreshToken = (
  defParams?: RefreshTokenRequest,
  options?: UseMutationOptions<
    RefreshTokenResponse,
    RequestError,
    RefreshTokenRequest
  >
) =>
  useMutation<RefreshTokenResponse, RequestError, RefreshTokenRequest>({
    mutationKey: QUERY_KEY_REFRESH_TOKEN,
    mutationFn: (params: RefreshTokenRequest) =>
      apiRefreshToken({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useRefreshToken;
