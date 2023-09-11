// Styles
import { StyledInput, AntdInputProps } from "./styles";

// Types
export interface InputProps extends AntdInputProps {}

export const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
