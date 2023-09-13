import { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  Label,
  ErrorMessage,
  ErrorMessageProps,
  LabelProps,
  HookFormErrorMessageProps,
} from "./styles";

// Re export types
export type { ErrorMessageProps, LabelProps, HookFormErrorMessageProps };

// Types
export interface InputWrapPartialProps {
  showLabel?: boolean;
  showErrors?: boolean;
  label?: string;
  placeholder?: string;
  required?: boolean;
  labelPosition?: "top" | "bottom" | "left" | "right";
}
export interface InputWrapProps
  extends InputWrapPartialProps,
    HtmlHTMLAttributes<HTMLDivElement>,
    HookFormErrorMessageProps<any, any> {
  clsPrefix?: string;
}

// Component
export const InputWrap = ({
  name,
  showLabel = false,
  showErrors = true,
  required = false,
  labelPosition = "top",
  label = "",
  placeholder = label,
  clsPrefix = "ui-input-wrap",
  className = "",
  children,
  ...props
}: InputWrapProps) => {
  const isTop = labelPosition === "top";
  const isBottom = labelPosition === "bottom";
  const isLeft = labelPosition === "left";
  const isRight = labelPosition === "right";
  const isTopOrLeft = isTop || isLeft;
  const isBottomOrRight = isBottom || isRight;

  const renderLabel = () => {
    return (
      showLabel && (
        <Label className={`${clsPrefix}-label`} $required={required}>
          {label}
        </Label>
      )
    );
  };

  const renderErrorMessage = () => {
    return (
      showErrors && (
        <ErrorMessage className={`${clsPrefix}-error`} name={name} />
      )
    );
  };

  return (
    <Wrap
      $labelPosition={labelPosition}
      className={`${clsPrefix} ${className}`}
      {...props}
    >
      {isBottom && renderErrorMessage()}
      {isTopOrLeft && renderLabel()}
      {children}
      {isBottomOrRight && renderLabel()}
      {isTop && renderErrorMessage()}
    </Wrap>
  );
};

export default InputWrap;
