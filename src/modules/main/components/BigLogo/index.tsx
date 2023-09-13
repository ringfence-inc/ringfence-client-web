import React from "react";

// Styles
import { LogoAndTextIcon, CircularLines } from "./styles";

// Types
export interface BigLogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BigLogo = ({ ...props }: BigLogoProps) => {
  return (
    <CircularLines>
      <LogoAndTextIcon {...props} />
    </CircularLines>
  );
};

export default BigLogo;
