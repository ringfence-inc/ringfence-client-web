import { HtmlHTMLAttributes } from "react";

// Styles
import { StyledHeader } from "./styles";

// Types
export interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Header = ({ children, ...props }: HeaderProps) => {
  return <StyledHeader {...props}>{children}</StyledHeader>;
};

export default Header;
