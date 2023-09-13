// Styles
import { StyledCheckbox, AntdCheckboxProps } from "./styles";

// Types
export interface CheckboxProps extends AntdCheckboxProps {}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  return <StyledCheckbox {...props} />;
};

export default Checkbox;
