import styled, { css } from "styled-components";

// Components
import _Button, { ButtonProps } from "../../../../components/Button";

// Re export types
export type { ButtonProps };

// Styled components
export const StyledButton = styled(_Button).attrs(() => ({
  type: "primary",
}))<ButtonProps>``;
