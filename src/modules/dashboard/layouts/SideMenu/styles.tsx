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

export const Sider = styled(_Sider)<SiderProps>`
  ${({ theme }) => css`
    padding: 24px !important;
    min-height: calc(100vh - 49px) !important;
    border-right: 1px solid ${theme.color.midGrey};
  `};
`;

export const StyledMenu = styled(Menu)<MenuProps>`
  ${({ theme }) => css`
    background-color: ${theme.color.black} !important;
  `};
`;

export const MenuItem = styled(_MenuItem)<MenuItemProps>`
  height: 48px !important;
  width: 100% !important;
  padding: 12px !important;
  ${({ theme }) => css`
    border-radius: ${theme.radius.xss} !important;
    margin: 0 !important;

    &.ant-menu-item-selected {
      background-color: ${theme.color.primary} !important;
      color: ${theme.color.black} !important;
      font-weight: ${theme.weight.semiBold} !important;
    }
  `};
`;

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
