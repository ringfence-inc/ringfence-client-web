import styled, { css } from "styled-components";

// Components
import _CircularLines, { CircularLinesProps } from "@/shared/ui/CircularLines";

// Re export types
export type { CircularLinesProps };

// Icons
import LogoAndTextSvg from "public/icons/logo-and-text.svg";

// Styled components
export const CircularLines = styled(_CircularLines)`
  width: 100%;
  max-width: 630px;
`;

export const LogoAndTextIcon = styled(LogoAndTextSvg)`
  width: 100%;

  ${({ theme }) => css`
    color: ${theme.color.white};
  `};
`;
