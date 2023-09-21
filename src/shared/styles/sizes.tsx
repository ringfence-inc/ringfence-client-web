import styled, { css } from "styled-components";

// Types
export type SizeType = "small" | "middle" | "large";

export type SizeProps = {
  size?: SizeType;
};

// Styled css
export const commonSizeCss = css<SizeProps>`
  ${({ theme, size = "large" }) => css`
    ${size === "large" &&
    css`
      height: 48px;
    `};

    ${size === "middle" &&
    css`
      height: 40px;
    `};

    ${size === "small" &&
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
  ${({ theme, size = "large" }) => css`
    ${size === "large" &&
    css`
      height: 44px;
    `};

    ${size === "middle" &&
    css`
      height: 36px;
    `};

    ${size === "small" &&
    css`
      height: 32px;
    `};
  `};
`;
