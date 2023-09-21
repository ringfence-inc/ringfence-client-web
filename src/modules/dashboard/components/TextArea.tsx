import styled, { css } from "styled-components";

// Components
import Input, { InputProps } from "./Input";

// Types
export type TextAreaProps = InputProps;

// Styled components
export const TextArea = styled(Input).attrs(() => ({
  inputType: "textarea",
}))<TextAreaProps>``;

export default TextArea;
