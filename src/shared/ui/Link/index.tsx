import React from "react";

// Styles
import { StyledLink, NextLinkProps } from "./styles";

// Types
export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Link = ({ disabled = false, ...props }: LinkProps) => {
  return (
    <StyledLink data-disabled={disabled} {...props}>
      {props.children}
    </StyledLink>
  );
};

export default Link;
