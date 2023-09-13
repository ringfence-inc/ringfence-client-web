import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

// Types
export interface LabelProps extends HtmlHTMLAttributes<HTMLLabelElement> {
  $required?: boolean;
}

// Styled components
export const Label = styled.span<LabelProps>`
  display: block;
  ${({ theme, $required }) => css`
    &::after {
      content: ${$required ? "'*'" : "''"};
      color: ${theme.colorErrorText};
    }
  `};
`;

export default Label;
