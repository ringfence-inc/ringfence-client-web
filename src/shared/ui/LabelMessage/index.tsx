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
export interface LabelMessagePartialProps {
  showLabel?: boolean;
  label?: string;
  placeholder?: string;
}
export interface LabelMessageProps
  extends LabelMessagePartialProps,
    HtmlHTMLAttributes<HTMLDivElement>,
    HookFormErrorMessageProps<any, any> {}

// Component
export const LabelMessage = ({
  name,
  showLabel = false,
  placeholder = "",
  label = placeholder,
  children,
  ...props
}: LabelMessageProps) => {
  return (
    <Wrap {...props}>
      {showLabel && <Label>{label}</Label>}
      {children}
      <ErrorMessage name={name} />
    </Wrap>
  );
};

export default LabelMessage;
