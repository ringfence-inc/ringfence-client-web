import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

// Styled components
export const Wrap = styled.div`
  max-width: 630px;
  width: 100%;
  position: relative;
  overflow: visible;
  z-index: -100;
  top: 0;
  left: 0;
`;

// Types
export interface RoundLineProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $number?: number;
  $startWidth?: number;
  $startHeight?: number;
}

export const RoundLine = styled.div<RoundLineProps>`
  position: absolute;
  border-radius: 50%;
  opacity: 0.25;
  ${({ theme, $startWidth = 120, $startHeight = 120, $number = 1 }) => {
    const newWidth = $startWidth * $number + 100 * $number;
    const newHeight = $startHeight * $number + 100 * $number;

    return css`
      top: 49%;
      left: 9.5%;
      transform: translate(-50%, -50%);
      border: 1px solid ${theme.color.primary};
      width: ${newWidth}px;
      height: ${newHeight}px;
      z-index: ${$number};
    `;
  }};
`;
