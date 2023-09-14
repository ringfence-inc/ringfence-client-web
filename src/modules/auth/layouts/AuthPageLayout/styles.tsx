import styled, { css } from "styled-components";

// Components
import _CircularLines, { CircularLinesProps } from "@/shared/ui/CircularLines";

// Styled components
export const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const TopWrap = styled.div`
  margin-top: 40px;
`;

export const ContentWrap = styled.div`
  align-items: center;
  max-width: 528px;
  width: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.radius.xs};
    background-color: ${theme.colorBgElevated};
    padding: 58px 48px;
    color: ${theme.color.text};
  `};
`;

export const CircularLines = styled(_CircularLines).attrs(() => ({
  count: 3,
  startWidth: 400,
  startHeight: 400,
}))<CircularLinesProps>`
  margin-top: -40px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .round-line {
    top: 50%;
    left: 50%;
  }
`;
