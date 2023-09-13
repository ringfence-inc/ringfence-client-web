import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

// Components
import _Label, { LabelProps } from "../Label";
import _ErrorMessage, {
  ErrorMessageProps,
  HookFormErrorMessageProps,
} from "../ErrorMessage";

// Re export types
export type { ErrorMessageProps, LabelProps, HookFormErrorMessageProps };

// Types
export interface StyledWrapProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $labelPosition?: "top" | "bottom" | "left" | "right";
}

// Styled components
export const Label = styled(_Label)<LabelProps>``;

export const ErrorMessage = styled(_ErrorMessage)<ErrorMessageProps>``;

export const Wrap = styled.label<StyledWrapProps>`
  ${({ theme, $labelPosition = "top" }) => css`
    ${$labelPosition === "top" &&
    css`
      ${Label} {
        margin-bottom: 8px;
      }
    `};

    ${$labelPosition === "bottom" &&
    css`
      ${Label} {
        margin-top: 8px;
      }
    `};

    ${$labelPosition === "left" &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      ${Label} {
        margin-right: 8px;
      }
    `};

    ${$labelPosition === "right" &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      ${Label} {
        margin-left: 8px;
      }
    `};
  `};
`;
