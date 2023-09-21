import styled, { css } from "styled-components";

// Styles
import { buttonSizeCss } from "@/shared/styles/sizes";

// Components
import Button, { ButtonProps } from "antd/lib/button";

// Re export types
export type { ButtonProps as AntdButtonProps };

// Styled components css
export const commonButtonCss = css`
  && {
    ${buttonSizeCss};
  }
  display: flex !important;
  align-items: center !important;
  font-weight: 500 !important;
`;

export const primaryButtonCss = css`
  ${({ theme }) => css`
    color: ${theme.color.black} !important;
  `};
`;

export const primaryDisabledCss = css`
  ${({ theme }) => css`
    color: ${theme.color.text} !important;
  `};
`;

// Styled components
export const StyledButton = styled(Button)<ButtonProps>`
  ${commonButtonCss};

  ${({ theme, type, disabled }) => css`
    ${type === "primary" &&
    css`
      ${primaryButtonCss};
      ${disabled && primaryDisabledCss}
    `};
  `};
`;
