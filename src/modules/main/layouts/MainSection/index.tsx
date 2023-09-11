import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";

// Components
import { BigLogo } from "../../components/BigLogo";

// Types
export interface MainSectionProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const MainSection = ({ ...props }: MainSectionProps) => {
  return (
    <Wrap {...props}>
      <BigLogo />
    </Wrap>
  );
};

export default MainSection;
