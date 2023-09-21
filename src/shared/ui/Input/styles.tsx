import styled, { css } from "styled-components";

// Styles
import { inputSizeCss } from "@/shared/styles/sizes";

// Components
import Input, { InputProps } from "antd/lib/input";

// Re export types
export type { InputProps as AntdInputProps };

// Styled CSS
export const commonInputCss = css<InputProps>`
  ${inputSizeCss};
`;

// Styled components
export const StyledInput = styled(Input)<InputProps>`
  ${commonInputCss}
`;

export const StyledInputPassword = styled(Input.Password)<InputProps>`
  ${commonInputCss}
`;

export const StyledInputTextArea = styled(Input.TextArea)<InputProps>`
  ${commonInputCss}
`;
