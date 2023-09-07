import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, SocialLinks, SmallLogo } from "./styles";

// Types
export interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <Wrap {...props}>
      <SmallLogo />
      <SocialLinks></SocialLinks>
    </Wrap>
  );
};

export default Footer;
