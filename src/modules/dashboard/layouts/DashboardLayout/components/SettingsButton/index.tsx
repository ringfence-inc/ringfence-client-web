// Styles
import { StyledButton, SettingsIcon, IconButtonLinkProps } from "./styles";

// Types
export interface SettingsButtonProps extends IconButtonLinkProps {}

export const SettingsButton = (props: SettingsButtonProps) => {
  return (
    <StyledButton {...props}>
      <SettingsIcon />
    </StyledButton>
  );
};

export default SettingsButton;
