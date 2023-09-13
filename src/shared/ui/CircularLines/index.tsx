import { HtmlHTMLAttributes } from "react";

// Styles
import { RoundLine, Wrap } from "./styles";

// Types
export interface CircularLinesProps extends HtmlHTMLAttributes<HTMLDivElement> {
  count?: number;
  number?: number;
  factor?: number;
  startWidth?: number;
  startHeight?: number;
}

export const RoundLines = ({
  startWidth = 123,
  startHeight = 123,
  count = 8,
  number = 1,
  factor = 1.4,
  children,
  className = "round-line",
  ...props
}: CircularLinesProps) => {
  if (number > count) {
    return children;
  }

  return (
    <RoundLines
      number={number + 1}
      {...{ count, className, factor, startHeight, startWidth }}
      {...props}
    >
      <RoundLine
        className={className}
        $number={number}
        $factor={factor}
        $startWidth={startWidth}
        $startHeight={startHeight}
      />
      {children}
    </RoundLines>
  );
};

export const CircularLines = ({
  startWidth = 123,
  startHeight = 123,
  count = 8,
  number = 1,
  factor = 1.4,
  children,
  ...props
}: CircularLinesProps) => {
  return (
    <Wrap {...props}>
      {children}
      <RoundLines
        count={count}
        number={1}
        factor={factor}
        startWidth={startWidth}
        startHeight={startHeight}
        className="round-line"
      />
    </Wrap>
  );
};

export default CircularLines;
