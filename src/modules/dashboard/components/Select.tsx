import styled, { css } from "styled-components";

// Components
import _Select, {
  SelectHookFormProps,
} from "@/shared/ui/Select/plugins/SelectHookForm";

// Re export types
export type SelectProps = SelectHookFormProps;

// Styled components
export const Select = styled(_Select).attrs(() => ({
  showLabel: true,
}))<SelectProps>``;

export default Select;
