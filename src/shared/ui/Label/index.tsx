import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

// Types
export interface LabelProps extends HtmlHTMLAttributes<HTMLLabelElement> {}

// Styled components
export const Label = styled.span<LabelProps>``;

export default Label;
