import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, ContentWrap, TopWrap, CircularLines } from "./styles";

// Components
import Theme from "@/shared/ui/Theme";
import SmallLogo from "../../components/SmallLogo";

// Types
export interface AuthPageLayoutProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export const AuthPageLayout = ({ ...props }: AuthPageLayoutProps) => {
  return (
    <Theme theme="light">
      <Wrap>
        <TopWrap>
          <SmallLogo />
        </TopWrap>
        <CircularLines>
          <ContentWrap>{props.children}</ContentWrap>
        </CircularLines>
      </Wrap>
    </Theme>
  );
};

export default AuthPageLayout;
