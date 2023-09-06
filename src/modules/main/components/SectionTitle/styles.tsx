import React from "react";
import styled, { css } from "styled-components";

// Styled components
export const StyledH1 = styled.h1`
  display: inline-flex;
  flex-direction: column;
  font-size: 64px;
  ${({ theme }) => css`
    color: ${theme.color.white};
  `};
`;

export const StyledSpan = styled.span`
  white-space: nowrap;
`;
