import styled from "styled-components";
import MenuItem, { MenuItemProps } from "antd/lib/menu/MenuItem";

// Re export types
export type { MenuItemProps as AntdMenuItemProps };

// Styled components
export const StyledMenuItem = styled(MenuItem)<MenuItemProps>``;
