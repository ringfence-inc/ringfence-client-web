import React from "react";

// Utils
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-weight: 400;
    background-color: #000;
    margin: 0;
  }

  button {
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
      <GlobalStyles {...props} />
      {children}
    </React.Fragment>
  );
};

export default GlobalStyled;
