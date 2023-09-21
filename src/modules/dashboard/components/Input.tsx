import styled, { css } from "styled-components";

// Components
import _Input, {
  InputHookFormProps,
} from "@/shared/ui/Input/plugins/InputHookForm";

// Types
export type InputProps = InputHookFormProps;

// Styled components
export const Input = styled(_Input).attrs(() => ({
  showLabel: true,
}))<InputProps>``;

export default Input;
