import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, RoundLine } from "./styles";

// Types
export interface EllipseWrapProps extends HtmlHTMLAttributes<HTMLDivElement> {
  count?: number;
  number?: number;
}

export const RoundLines = ({
  count = 8,
  number = 1,
  children,
  ...props
}: EllipseWrapProps) => {
  if (number >= count) {
    return children;
  }

  return (
    <RoundLines count={count} number={number + 1} {...props}>
      <RoundLine $number={number} />
      {children}
    </RoundLines>
  );
};

export const CircularLines = ({
  count = 8,
  number = 1,
  children,
  ...props
}: EllipseWrapProps) => {
  return (
    <Wrap {...props}>
      {children}
      <RoundLines count={count} number={1} />
    </Wrap>
  );
};

export default CircularLines;
