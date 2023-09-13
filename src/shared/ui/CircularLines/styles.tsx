import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

// Styled components
export const Wrap = styled.div`
  width: 100%;
  position: relative;
  overflow: visible;
`;

// Types
export interface RoundLineProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $number?: number;
  $startWidth?: number;
  $startHeight?: number;
  $factor?: number;
}

export const RoundLine = styled.div<RoundLineProps>`
  position: absolute;
  border-radius: 50%;
  opacity: 0.25;
  z-index: -100;
  ${({
    theme,
    $startWidth = 123,
    $startHeight = 123,
    $number = 1,
    $factor = 1.4,
  }) => {
    const newWidth = $startWidth * Math.pow($factor, $number);
    const newHeight = $startHeight * Math.pow($factor, $number);

    return css`
      top: 49%;
      left: 9.5%;
      transform: translate(-50%, -50%);
      border: 1px solid ${theme.color.primary};
      width: ${newWidth}px;
      height: ${newHeight}px;
    `;
  }};
`;
