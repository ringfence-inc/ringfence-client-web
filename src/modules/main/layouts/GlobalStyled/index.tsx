import React from "react";
import "antd/dist/reset.css";

// Utils
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #000;
    margin: 0;
  }

`;

// Types
export interface GlobalStyledProps {
  children?: React.ReactNode;
}

export const GlobalStyled = ({ children, ...props }: GlobalStyledProps) => {
  return (
    <React.Fragment key="global-styled">
      <GlobalStyles />
      {children}
    </React.Fragment>
  );
};
