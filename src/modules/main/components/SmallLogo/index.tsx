import React from "react";

// Styles
import { LogoAndTextIcon } from "./styles";

// Types
export interface SmallLogoProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmallLogo = ({ ...props }: SmallLogoProps) => {
  return <LogoAndTextIcon {...props} />;
};

export default SmallLogo;
