// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiLogin,
  LoginRequest,
  LoginResponse,
  QUERY_KEY_LOGIN,
} from "../apiLogin";

// Request hook
export const useLogin = (
  defParams?: Partial<LoginRequest>,
  options?: UseMutationOptions<LoginResponse, RequestError, LoginRequest>
) =>
  useMutation<LoginResponse, RequestError, LoginRequest>({
    mutationKey: QUERY_KEY_LOGIN,
    mutationFn: (params: LoginRequest) =>
      apiLogin({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useLogin;
