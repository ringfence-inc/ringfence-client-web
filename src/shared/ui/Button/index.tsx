// Styles
import { StyledButton, AntdButtonProps } from "./styles";

// Types
export interface ButtonProps extends AntdButtonProps {
  active?: boolean;
}

export const Button = ({ active = false, ...props }: ButtonProps) => {
  return <StyledButton data-active={active} {...props} />;
};

export default Button;
