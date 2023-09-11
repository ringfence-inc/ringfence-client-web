import styled, { css } from "styled-components";

// Components
import _Label, { LabelProps } from "../Label";
import _ErrorMessage, {
  ErrorMessageProps,
  HookFormErrorMessageProps,
} from "../ErrorMessage";

// Re export types
export type { ErrorMessageProps, LabelProps, HookFormErrorMessageProps };

// Styled components
export const Label = styled(_Label)<LabelProps>``;

export const ErrorMessage = styled(_ErrorMessage)<ErrorMessageProps>``;

export const Wrap = styled.div``;
