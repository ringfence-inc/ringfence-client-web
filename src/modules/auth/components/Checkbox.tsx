import styled, { css } from "styled-components";

// Components
import CheckboxFormHook, {
  CheckboxHookFormProps,
} from "@/shared/ui/Checkbox/plugins/CheckboxHookForm";

// Types
export type CheckboxProps = CheckboxHookFormProps;

// Styled components
const Checkbox = styled(CheckboxFormHook)<CheckboxProps>`
  ${({ theme }) => css`
    .ui-input-wrap-label {
      font-size: 14px;
    }
  `};
`;

export default Checkbox;
