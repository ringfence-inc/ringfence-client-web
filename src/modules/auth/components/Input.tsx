import styled, { css } from "styled-components";

// Components
import InputFormHook, {
  InputHookFormProps,
} from "@/shared/ui/Input/plugins/InputHookForm";

// Types
export type InputProps = InputHookFormProps;

// Styled components
const Input = styled(InputFormHook)<InputProps>`
  height: 48px;
`;

export default Input;
