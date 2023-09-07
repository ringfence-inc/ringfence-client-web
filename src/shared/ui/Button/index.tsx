// Styles
import { StyledButton, AntdButtonProps } from "./styles";

// Types
export interface ButtonProps extends AntdButtonProps {}

export const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
