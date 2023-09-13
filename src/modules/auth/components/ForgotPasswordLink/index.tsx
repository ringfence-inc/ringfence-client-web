// Styles
import { StyledLinkPrimary, LinkProps } from "./styles";

// Types
export interface ForgotPasswordLinkProps extends Partial<LinkProps> {}

export const ForgotPasswordLink = ({
  href = "/auth/recovery-password",
  ...props
}: ForgotPasswordLinkProps) => {
  return (
    <StyledLinkPrimary href={href} {...props}>
      Forgot password
    </StyledLinkPrimary>
  );
};

export default ForgotPasswordLink;
