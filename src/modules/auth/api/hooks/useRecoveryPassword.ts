// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiRecoveryPassword,
  RecoveryPasswordRequest,
  RecoveryPasswordResponse,
  QUERY_KEY_RECOVERY_PASSWORD,
} from "../apiRecoveryPassword";

// Request hook
export const useRecoveryPassword = (
  defParams?: RecoveryPasswordRequest,
  options?: UseMutationOptions<
    RecoveryPasswordResponse,
    RequestError,
    RecoveryPasswordRequest
  >
) =>
  useMutation<RecoveryPasswordResponse, RequestError, RecoveryPasswordRequest>({
    mutationKey: QUERY_KEY_RECOVERY_PASSWORD,
    mutationFn: (params: RecoveryPasswordRequest) =>
      apiRecoveryPassword({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useRecoveryPassword;
