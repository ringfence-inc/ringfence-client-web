import React from "react";

// Styles
import { StyledInput, StyledInputPassword, AntdInputProps } from "./styles";

// Types
export interface InputProps extends AntdInputProps {
  InputComponent?: React.FC<InputProps> | React.FC<any>;
  inputPassword?: boolean;
}

export const Input = ({
  inputPassword = false,
  InputComponent,
  ...props
}: InputProps) => {
  const Component =
    InputComponent ||
    ((inputPassword ? StyledInputPassword : StyledInput) as React.FC<any>);

  return <Component {...props} />;
};

export default Input;
