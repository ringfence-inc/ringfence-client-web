// Styles
import { StyledButton, ButtonProps } from "./styles";

// Types
export interface IconButtonProps extends ButtonProps {}

export const IconButton = ({
  shape = "circle",
  children = "",
  icon = children,
  ...props
}: IconButtonProps) => {
  return (
    <StyledButton shape={shape} {...props}>
      {icon || children}
    </StyledButton>
  );
};

export default IconButton;
