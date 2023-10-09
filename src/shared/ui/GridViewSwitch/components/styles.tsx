import { css } from "styled-components";

// Types
import type { IconButtonProps } from "../../../../modules/dashboard/components/IconButton";

export const buttonCss = css<IconButtonProps>`
  ${({ theme, active }) => css`
    color: ${theme.color.white} !important;

    &:hover {
      background-color: transparent !important;
    }

    ${active &&
    css`
      color: ${theme.color.primary} !important;
    `};
  `};
`;
