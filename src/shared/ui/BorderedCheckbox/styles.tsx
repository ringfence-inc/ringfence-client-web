import styled, { css } from "styled-components";

// Components
import Checkbox, { CheckboxProps } from "antd/lib/checkbox";

// Types
import type { SizeProps } from "@/shared/styles/sizes";
export interface StyledCheckboxProps extends CheckboxProps, SizeProps {}

// Styled css
export const borderedCheckboxCss = css`
  ${({ theme }) => css`
    .ant-checkbox,
    .ant-checkbox-inner {
      width: inherit;
      height: inherit;
    }

    .ant-checkbox-inner {
      border: 2px solid ${theme.color.white} !important;
      background-color: transparent !important;
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      border: 2px solid ${theme.color.primary} !important;
      &::after {
        border-color: ${theme.color.primary};
      }
    }
  `};
`;

export const borderedCheckboxLargeCss = css`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;

    .ant-checkbox-inner {
      &::after {
        width: 9px;
        height: 12px;
      }
    }
  `};
`;

export const borderedCheckboxMiddleCss = css`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;

    .ant-checkbox-inner {
      &::after {
        width: 7px;
        height: 10px;
      }
    }
  `};
`;

export const borderedCheckboxSmallCss = css`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;

    .ant-checkbox-inner {
      &::after {
        width: 5px;
        height: 7px;
      }
    }
  `};
`;

export const borderedCheckboxMiniCss = borderedCheckboxSmallCss;

export const StyledCheckbox = styled(Checkbox)<StyledCheckboxProps>`
  ${({ theme, size }) => css`
    ${borderedCheckboxCss};
    ${size === "large" && borderedCheckboxLargeCss};
    ${size === "middle" && borderedCheckboxMiddleCss};
    ${size === "small" && borderedCheckboxSmallCss};
    ${size === "mini" && borderedCheckboxMiniCss};
  `};
`;
