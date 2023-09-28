// Styles
import { StyledCheckbox, AntdCheckboxProps } from "./styles";

// Types
import type { SizeProps } from "@/shared/styles/sizes";
export type TCheckboxSize = "small" | "middle" | "large";
export interface CheckboxProps extends AntdCheckboxProps, SizeProps {}

export const Checkbox = ({ size = "small", ...props }: CheckboxProps) => {
  return <StyledCheckbox $size={size} {...props} />;
};

export default Checkbox;
