import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, ContentWrap, TopWrap, CircularLines } from "./styles";

// Components
import SmallLogo from "../../components/SmallLogo";

// Types
export interface AuthPageLayoutProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export const AuthPageLayout = ({ ...props }: AuthPageLayoutProps) => {
  return (
    <Wrap {...props}>
      <TopWrap>
        <SmallLogo />
      </TopWrap>
      <CircularLines>
        <ContentWrap>{props.children}</ContentWrap>
      </CircularLines>
    </Wrap>
  );
};

export default AuthPageLayout;
