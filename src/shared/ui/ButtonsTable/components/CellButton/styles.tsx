import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

// Types
export interface TdProps extends HtmlHTMLAttributes<HTMLTableCellElement> {
  $space?: string;
  $rounded?: boolean;
  $danger?: boolean;
  $leftBorder?: boolean;
  $roundedLeft?: boolean;
  $roundedRight?: boolean;
}

export const IconWrap = styled.span`
  margin-right: 4px;
  display: inline-flex;
  align-items: center;
`;

// Styled components
export const StyledButton = styled.button<TdProps>`
  ${({
    theme,
    $space = "",
    $rounded,
    $danger,
    $leftBorder,
    $roundedLeft,
    $roundedRight,
  }) => css`
    display: flex;
    align-items: center;
    padding: 0 12px 0 8px;
    height: 36px;
    color: ${theme.color.text};
    border: 1px solid ${theme.color.midGrey};
    vertical-align: middle;

    ${$space &&
    css`
      border: none;
      width: ${$space};
      padding: 0;
    `};

    ${$roundedLeft &&
    css`
      border-top-left-radius: ${theme.radius.xss};
      border-bottom-left-radius: ${theme.radius.xss};
    `};

    ${$roundedRight &&
    css`
      border-top-right-radius: ${theme.radius.xss};
      border-bottom-right-radius: ${theme.radius.xss};
    `}

    ${$rounded &&
    css`
      border-radius: ${theme.radius.xss};
    `};

    ${$leftBorder &&
    css`
      border-left: 1px solid ${theme.color.midGrey};
    `};

    &[data-disabled="false"] {
      cursor: pointer;

      ${!$danger &&
      css`
        &:hover {
          background-color: ${theme.color.primary};
          color: ${theme.color.black};
        }
      `};
    }

    &[data-disabled="true"] {
      ${!$danger &&
      css`
        cursor: not-allowed;
        color: ${theme.color.midGrey};
      `};
    }

    ${$danger &&
    css`
      ${IconWrap} {
        color: ${theme.colorError};
      }

      border-color: ${theme.colorError};
    `};
  `};
`;
