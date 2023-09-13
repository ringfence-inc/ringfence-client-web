// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiCreateAccount,
  CreateAccountRequest,
  CreateAccountResponse,
  QUERY_KEY_CREATE_ACCOUNT,
} from "../apiCreateAccount";

// Request hook
export const useCreateAccount = (
  defParams?: CreateAccountRequest,
  options?: UseMutationOptions<
    CreateAccountResponse,
    RequestError,
    CreateAccountRequest
  >
) =>
  useMutation<CreateAccountResponse, RequestError, CreateAccountRequest>({
    mutationKey: QUERY_KEY_CREATE_ACCOUNT,
    mutationFn: (params: CreateAccountRequest) =>
      apiCreateAccount({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useCreateAccount;
