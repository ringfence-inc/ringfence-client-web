// Styles
import { StyledButton, ExitIcon, IconButtonProps } from "./styles";

// Api
import apiLogout from "@/modules/auth/api/apiLogout";

// Types
export interface LogoutButtonProps extends IconButtonProps {}

export const LogoutButton = (props: LogoutButtonProps) => {
  return (
    <StyledButton onClick={() => apiLogout()} {...props}>
      <ExitIcon />
    </StyledButton>
  );
};

export default LogoutButton;
