import React from "react";
import "antd/dist/reset.css";

// Utils
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #000;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, textarea, label {
    all: unset;
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
