// Hooks
import { useEffect } from "react";
import useMessage, { UseMessageProps } from "./useMessage";

// Utils
import deepSearchKey from "../utils/deepSearchKey";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
export interface UseMutationMessageProps {
  mutation: UseMutationResult<any, any, any, any>;
  errorMessage?: string;
  successMessage?: string;
  errorMessagePath?: string;
  defaultErrorMessage?: string;
  defaultSuccessMessage?: string;
  options?: UseMessageProps;
}

export const useMutationMessage = ({
  mutation,
  errorMessage,
  successMessage,
  errorMessagePath = "message",
  defaultErrorMessage = "Something went wrong, please try again later",
  defaultSuccessMessage,
  options,
}: UseMutationMessageProps) => {
  const { messageApi } = useMessage(options);

  const { isLoading, isSuccess, isError, error } = mutation || {};
  const mutationStatusType = isSuccess ? "success" : isError ? "error" : "";

  const errorMessageFromData = deepSearchKey(error, errorMessagePath);

  const message = isError
    ? errorMessage || errorMessageFromData || defaultErrorMessage
    : isSuccess
    ? successMessage || defaultSuccessMessage
    : undefined;

  console.log("use mutation message", {
    isLoading,
    isSuccess,
    isError,
    error,
    mutationStatusType,
    errorMessageFromData,
    message,
  });

  useEffect(() => {
    console.log("use effect message", message);
    if (message) {
      const method =
        messageApi?.[mutationStatusType as "error" | "success"] || (() => {});
      console.log(
        "use effect message method",
        messageApi?.[mutationStatusType as "error" | "success"]
      );
      method(message);
    }
  }, [message]);

  return { messageApi };
};

export default useMutationMessage;
