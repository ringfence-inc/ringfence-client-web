import { HtmlHTMLAttributes } from "react";

// Styles
import { StyledContent } from "./styles";

// Types
export interface ContentProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Content = ({ children, ...props }: ContentProps) => {
  return <StyledContent {...props}>{children}</StyledContent>;
};

export default Content;
