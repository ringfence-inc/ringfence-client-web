import { HtmlHTMLAttributes } from "react";

// Styles
import { Text } from "./styles";

// Components
import {
  ErrorMessage as HookFormErrorMessage,
  Props,
} from "@hookform/error-message";

// Re export types
export type { Props as HookFormErrorMessageProps };

// Types
export interface ErrorMessageProps
  extends Props<any, any>,
    HtmlHTMLAttributes<HTMLSpanElement> {}

export const ErrorMessage = ({
  name,
  className,
  as,
  errors,
  key,
  message,
  ...props
}: ErrorMessageProps) => {
  if (!global?.window) return "";

  const errorRender = ({ message = "", messages }: any = {}) => {
    return (
      <Text className={className} {...props}>
        {message}
      </Text>
    );
  };

  return (
    <HookFormErrorMessage
      name={name}
      render={errorRender}
      {...{ as, errors, key, message }}
    />
  );
};

export default ErrorMessage;
