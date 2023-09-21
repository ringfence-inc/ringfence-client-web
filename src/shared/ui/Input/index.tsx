import React from "react";

// Styles
import {
  StyledInput,
  StyledInputPassword,
  StyledInputTextArea,
  AntdInputProps,
} from "./styles";

// Types
export type InputType = "password" | "text" | "textarea";
export interface InputProps extends AntdInputProps {
  InputComponent?: React.FC<InputProps> | React.FC<any>;
  inputPassword?: boolean;
  inputType?: InputType;
}

export const inputByType: Record<InputType, React.FC<InputProps>> = {
  text: StyledInput,
  password: StyledInputPassword,
  textarea: StyledInputTextArea,
};

export const Input = ({
  inputPassword = false,
  InputComponent,
  inputType = "text",
  ...props
}: InputProps) => {
  const Component = InputComponent || inputByType[inputType] || StyledInput;

  return <Component {...props} />;
};

export default Input;
