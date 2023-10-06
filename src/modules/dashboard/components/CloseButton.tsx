import styled, { css } from "styled-components";

// Components
import Button, { ButtonProps } from "./Button";

// Types
export type CloseButtonProps = ButtonProps;

// Styled components
export const CloseButton = styled(Button).attrs(() => ({
  type: "primary",
  htmlType: "button",
  size: "middle",
  danger: true,
}))<ButtonProps>``;

export default CloseButton;
