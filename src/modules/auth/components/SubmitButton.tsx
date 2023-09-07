import styled, { css } from "styled-components";

// Components
import _Button, { ButtonProps } from "@/shared/ui/Button";

// Re export types
export type { ButtonProps };

// Styled components
export const SubmitButton = styled(_Button).attrs(() => ({
  type: "primary",
}))<ButtonProps>`
  height: 46px !important;
  ${({ theme }) => css`
    color: ${theme.color.black};
  `};
`;

export default SubmitButton;
