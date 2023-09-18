import styled, { css } from "styled-components";

// Styles
import { buttonCss } from "../styles";

// Icons
import GridSvg from "public/icons/grid.svg";

// Components
import IconButton, { IconButtonProps } from "../../../IconButton";

// Re export types
export type { IconButtonProps };

// Styled components
export const StyledButton = styled(IconButton).attrs(() => ({
  type: "text",
}))<IconButtonProps>`
  ${buttonCss};
`;

// Styled icon components
export const GridIcon = styled(GridSvg)`
  width: 24px;
  height: 24px;
`;
