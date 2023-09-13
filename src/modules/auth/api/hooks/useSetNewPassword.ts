// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiSetNewPassword,
  SetNewPasswordRequest,
  SetNewPasswordResponse,
  QUERY_KEY_SET_NEW_PASSWORD,
} from "../apiSetNewPassword";

// Request hook
export const useSetNewPassword = (
  defParams?: SetNewPasswordRequest,
  options?: UseMutationOptions<
    SetNewPasswordResponse,
    RequestError,
    SetNewPasswordRequest
  >
) =>
  useMutation<SetNewPasswordResponse, RequestError, SetNewPasswordRequest>({
    mutationKey: QUERY_KEY_SET_NEW_PASSWORD,
    mutationFn: (params: SetNewPasswordRequest) =>
      apiSetNewPassword({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useSetNewPassword;
