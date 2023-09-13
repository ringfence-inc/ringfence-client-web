import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";

// Types
export interface AuthPageLayoutProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export const AuthPageLayout = ({ ...props }: AuthPageLayoutProps) => {
  return <Wrap {...props}></Wrap>;
};
