// Styles
import { StyledSelect, AntdSelectProps } from "./styles";

// Types
export interface SelectProps extends AntdSelectProps {}

export const Select = ({ ...props }: SelectProps) => {
  return <StyledSelect {...props} />;
};

export default Select;
