import { css } from "styled-components";

// Types
import type { IconButtonProps } from "../../IconButton";

export const buttonCss = css<IconButtonProps>`
  ${({ theme, active }) => css`
    color: ${theme.color.white} !important;

    ${active &&
    css`
      color: ${theme.color.primary} !important;
    `};
  `};
`;
