import styled, { css } from "styled-components";

// Components
import Button, { ButtonProps } from "./Button";

// Types
export type SubmitButtonProps = ButtonProps;

// Styled components
export const SubmitButton = styled(Button).attrs(() => ({
  type: "primary",
  htmlType: "submit",
  size: "large",
}))<ButtonProps>``;

export default SubmitButton;
