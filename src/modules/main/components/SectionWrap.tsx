import React from "react";
import styled, { css } from "styled-components";

export interface SectionWrapProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SectionWrap = styled.section<SectionWrapProps>`
  ${({ theme }) => css`
    min-height: 620px;
    border-radius: 40px;
    padding: 140px 80px;
    margin-top: ${theme.m.lg};
    width: 100%;
    max-width: ${theme.maxWidth};
  `};
`;

export default SectionWrap;
