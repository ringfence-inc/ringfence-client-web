// Styles
import { StyledMenuItem, AntdMenuItemProps } from "./styles";

// Types
export interface MenuItemProps extends AntdMenuItemProps {}

export const MenuItem = ({ ...props }: MenuItemProps) => {
  return <StyledMenuItem {...props}>{props.children}</StyledMenuItem>;
};

export default MenuItem;
