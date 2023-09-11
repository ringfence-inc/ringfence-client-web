import styled, { css } from "styled-components";

// Icons
import LogoAndTextSvg from "public/icons/logo-and-text.svg";

export const LogoAndTextIcon = styled(LogoAndTextSvg)`
  max-width: 630px;
  width: 100%;

  ${({ theme }) => css`
    color: ${theme.color.white};
  `};
`;
