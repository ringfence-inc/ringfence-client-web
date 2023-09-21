import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

// Types
export interface FormWrapProps extends HtmlHTMLAttributes<HTMLFormElement> {}

// Styles components
export const FormWrap = styled.form`
  max-width: 558px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default FormWrap;
