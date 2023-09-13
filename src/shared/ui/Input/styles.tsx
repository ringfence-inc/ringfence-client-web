import styled, { css } from "styled-components";

// Components
import Input, { InputProps } from "antd/lib/input";

// Re export types
export type { InputProps as AntdInputProps };

// Styled CSS
export const styledInputCss = css<InputProps>``;

// Styled components
export const StyledInput = styled(Input)<InputProps>`
  ${styledInputCss}
`;

export const StyledInputPassword = styled(Input.Password)<InputProps>`
  ${styledInputCss}
`;
