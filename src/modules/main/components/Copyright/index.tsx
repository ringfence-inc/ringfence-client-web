import React from "react";

// Styles
import { Text } from "./styles";

// Types
export interface CopyrightProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {}

export const Copyright = React.memo(
  ({
    children = `© ${new Date().getFullYear()} RINGFENCE`,
    ...props
  }: CopyrightProps) => {
    return <Text {...props}>{children}</Text>;
  }
);
Copyright.displayName = "Copyright";

export default Copyright;
