import styled, { css } from "styled-components";

// Icons
import PenSvg from "public/icons/pen.svg";

// Components
import _Button, { ButtonProps } from "../../../../components/Button";

// Re export types
export type { ButtonProps };

// Styled components
export const StyledButton = styled(_Button).attrs(() => ({
  type: "primary",
  size: "middle",
}))<ButtonProps>``;

// Styled icons
export const PenIcon = styled(PenSvg)`
  width: 20px;
  height: 20px;
`;
