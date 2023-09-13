// Styles
import { StyledAlert, AlertProps } from "./styles";

// Hooks
import { useState, useEffect } from "react";

// Utils
import deepSearchKey from "@/shared/utils/deepSearchKey";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
export interface MutationAlertProps extends AlertProps {
  mutation: UseMutationResult<any, any, any, any>;
  errorMessage?: string;
  successMessage?: string;
  errorMessagePath?: string;
  defaultErrorMessage?: string;
  defaultSuccessMessage?: string;
  visible?: boolean;
}

export const MutationAlert = ({
  mutation,
  afterClose,
  type = "info",
  visible = false,
  closeIcon = true,
  errorMessage,
  successMessage,
  errorMessagePath = "message",
  defaultErrorMessage = "Something went wrong, please try again later",
  defaultSuccessMessage,
  ...props
}: MutationAlertProps) => {
  const [stateVisible, setStateVisible] = useState(visible);

  const { isLoading, isSuccess, isError, error } = mutation || {};
  const mutationStatusType = isSuccess
    ? "success"
    : isError
    ? "error"
    : undefined;

  const errorMessageFromData = deepSearchKey(error, errorMessagePath);

  const message = isError
    ? errorMessage || errorMessageFromData || defaultErrorMessage
    : isSuccess
    ? successMessage || defaultSuccessMessage
    : undefined;
  console.log("mutation alert message", message);

  useEffect(() => {
    if (stateVisible !== visible) {
      setStateVisible(visible);
    }
  }, [visible]);

  useEffect(() => {
    if (message) {
      setStateVisible(true);
    }
  }, [message]);

  const handleAfterClose = () => {
    setStateVisible(false);
    afterClose?.();
  };

  return (
    stateVisible && (
      <StyledAlert
        type={mutationStatusType || type}
        afterClose={handleAfterClose}
        message={isLoading ? "Loading..." : message}
        closeIcon={closeIcon}
        {...props}
      />
    )
  );
};

export default MutationAlert;
