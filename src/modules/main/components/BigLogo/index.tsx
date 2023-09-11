import React from "react";

// Styles
import { LogoAndTextIcon } from "./styles";

// Types
export interface BigLogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BigLogo = ({ ...props }: BigLogoProps) => {
  return <LogoAndTextIcon {...props} />;
};

export default BigLogo;
