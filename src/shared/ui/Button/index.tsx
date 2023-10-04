// Styles
import { StyledButton, AntdButtonProps } from "./styles";

// Types
import type { SizeType as AntdSizeType } from "antd/lib/config-provider/SizeContext";
import { SizeType } from "@/shared/styles/sizes";
export interface ButtonProps extends Omit<AntdButtonProps, "size"> {
  active?: boolean;
  size?: SizeType;
}

export const Button = ({
  active = false,
  size = "middle",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton data-active={active} size={size as AntdSizeType} {...props} />
  );
};

export default Button;
