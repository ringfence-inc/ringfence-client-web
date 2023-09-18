import styled, { css } from "styled-components";

// Icons
import HomeSvg from "public/icons/home.svg";
import PenSvg from "public/icons/pen.svg";
import FolderSvg from "public/icons/folder.svg";

// Components
import _Sider, { SiderProps } from "antd/lib/layout/Sider";
import _MenuItem, { MenuItemProps } from "../../components/MenuItem";
import Menu, {
  MenuProps,
  MenuItemGroupProps,
  MenuDividerProps,
} from "antd/lib/menu";
import _Link, { LinkProps } from "@/shared/ui/Link";

// Re export types
export type {
  MenuProps,
  SiderProps,
  MenuItemGroupProps,
  MenuDividerProps,
  LinkProps,
};

// Styled components
export const Link = styled(_Link)<LinkProps>``;

export const Sider = styled(_Sider)<SiderProps>``;

export const StyledMenu = styled(Menu)<MenuProps>`
  ${({ theme }) => css`
    background-color: ${theme.color.black} !important;
  `};
`;

export const MenuItem = styled(_MenuItem)<MenuItemProps>``;

// Styled icon components
export const iconsCss = css`
  width: 24px;
  height: 24px;
`;

export const HomeIcon = styled(HomeSvg)`
  ${iconsCss};
`;

export const PenIcon = styled(PenSvg)`
  ${iconsCss};
`;

export const FolderIcon = styled(FolderSvg)`
  ${iconsCss};
`;
