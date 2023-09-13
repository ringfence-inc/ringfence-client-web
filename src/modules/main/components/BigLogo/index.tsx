import React from "react";

// Styles
import { LogoAndTextIcon } from "./styles";

// Components
import CircularLines from "../../../../shared/ui/CircularLines";

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
