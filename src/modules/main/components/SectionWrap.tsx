import React from "react";
import styled, { css } from "styled-components";

export interface SectionWrapProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SectionWrap = styled.section<SectionWrapProps>`
  ${({ theme }) => css`
    border-radius: 40px;
    padding: 140px 80px;
  `};
`;

export default SectionWrap;
