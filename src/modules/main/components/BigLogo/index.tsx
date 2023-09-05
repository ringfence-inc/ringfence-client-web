import React from "react";

// Styles
import { LogoIcon } from "./styles";

// Types
export interface BigLogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BigLogo = ({ ...props }: BigLogoProps) => <LogoIcon {...props} />;
