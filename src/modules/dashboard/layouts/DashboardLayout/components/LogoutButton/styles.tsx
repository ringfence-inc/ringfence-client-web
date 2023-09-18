import styled, { css } from "styled-components";

// Icons
import ExitSvg from "public/icons/exit.svg";

// Components
import _IconButton, { IconButtonProps } from "@/shared/ui/IconButton";

// Re export types
export type { IconButtonProps };

// Styled icon components
export const StyledButton = styled(_IconButton).attrs(() => ({
  type: "text",
  size: "middle",
}))<IconButtonProps>``;

export const ExitIcon = styled(ExitSvg)`
  width: 24px;
  height: 24px;
  ${({ theme }) => css`
    color: ${theme.color.text};
  `};
`;
