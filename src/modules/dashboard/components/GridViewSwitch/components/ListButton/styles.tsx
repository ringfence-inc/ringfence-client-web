import styled, { css } from "styled-components";

// Styles
import { buttonCss } from "../styles";

// Icons
import ListSvg from "public/icons/list.svg";

// Components
import IconButton, { IconButtonProps } from "../../../IconButton";

// Re export types
export type { IconButtonProps };

// Styled components
export const StyledButton = styled(IconButton).attrs(() => ({
  type: "text",
  size: "middle",
}))<IconButtonProps>`
  ${buttonCss};
`;

// Styled icon components
export const ListIcon = styled(ListSvg)`
  width: 24px;
  height: 24px;
`;
