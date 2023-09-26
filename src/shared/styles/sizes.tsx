import styled, { css } from "styled-components";

// Types
export type SizeType = "small" | "middle" | "large";

export type SizeProps = {
  $size?: SizeType;
  size?: SizeType;
};

// Styled css
export const commonSizeCss = css<SizeProps>`
  ${({ theme, size = "large", $size = size }) => css`
    ${$size === "large" &&
    css`
      height: 48px;
    `};

    ${$size === "middle" &&
    css`
      height: 40px;
    `};

    ${$size === "small" &&
    css`
      height: 32px;
    `};
  `};
`;

export const inputSizeCss = css<SizeProps>`
  ${commonSizeCss};
`;

export const selectSizeCss = css<SizeProps>`
  ${commonSizeCss};
`;

export const buttonSizeCss = css<SizeProps>`
  ${({ theme, size = "large", $size = size }) => css`
    ${$size === "large" &&
    css`
      height: 44px;
    `};

    ${$size === "middle" &&
    css`
      height: 36px;
    `};

    ${$size === "small" &&
    css`
      height: 32px;
    `};
  `};
`;

export const checkboxSizeCss = css<SizeProps>`
  ${({ theme, size = "small", $size = size }) => css`
    ${$size === "large" &&
    css`
      width: 24px;
      height: 24px;

      .ant-checkbox-inner: after {
        width: 8px;
        height: 13px;
      }
    `};

    ${$size === "middle" &&
    css`
      width: 20px;
      height: 20px;
      .ant-checkbox-inner: after {
        width: 6px;
        height: 11px;
      }
    `};

    ${$size === "small" &&
    css`
      width: 16px;
      height: 16px;
      .ant-checkbox-inner: after {
        width: 6px;
        height: 9px;
      }
    `};
  `};
`;
