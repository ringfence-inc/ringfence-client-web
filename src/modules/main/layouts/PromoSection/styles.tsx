import styled, { css } from "styled-components";

// Components
import { SectionWrap, SectionWrapProps } from "../../components/SectionWrap";
import { SectionTitle, SectionTitleProps } from "../../components/SectionTitle";

// Icons
import LargeOutlinedLogoSvg from "public/icons/large-outlined-logo.svg";

// Re export types
export type { SectionWrapProps, SectionTitleProps };

// Styled components
export const LargeOutlinedLogoIcon = styled(LargeOutlinedLogoSvg)`
  position: absolute;
  right: -10px;
  z-index: 0;
  height: 110%;
  ${({ theme }) => css`
    color: ${theme.color.primary};
  `};
`;

export const StyledSectionTitle = styled(SectionTitle)<SectionTitleProps>`
  position: relative;
  z-index: 1;
  ${({ theme }) => css`
    color: ${theme.color.black};
  `};
`;

export const Wrap = styled(SectionWrap)<SectionWrapProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  ${({ theme }) => css`
    background-color: ${theme.color.white};
  `};
`;
