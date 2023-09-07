import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, SocialLinks, SmallLogo, Link, Copyright } from "./styles";

// Types
export interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <Wrap {...props}>
      <SmallLogo />
      <SocialLinks>
        <Link href="/">TERMS</Link>
        <Link href="/">SOCIAL?</Link>
        <Copyright />
      </SocialLinks>
    </Wrap>
  );
};

export default Footer;
