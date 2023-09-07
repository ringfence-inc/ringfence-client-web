import React from "react";
import styled, { css } from "styled-components";

// Styled components
export const StyledH1 = styled.h1`
  display: inline-flex;
  flex-direction: column;
  font-size: 64px;
  line-height: 100%;
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: ${theme.weight.bold};
  `};
`;

export const StyledSpan = styled.span`
  white-space: nowrap;
  min-height: 64px;
`;
