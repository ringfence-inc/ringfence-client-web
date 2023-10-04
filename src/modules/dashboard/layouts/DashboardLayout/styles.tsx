import styled, { css } from "styled-components";

// Icons
import LogoTextSvg from "public/icons/logo-and-text.svg";

// Components
import _Link, { LinkProps } from "@/shared/ui/Link";

// Layouts
import _Layout, { LayoutProps } from "antd/lib/layout";
import _Header, { HeaderProps } from "../../components/Header";
import _Content, { ContentProps } from "../../components/Content";
import _SideMenu, { SideMenuProps } from "../SideMenu";

// Re export types
export type {
  LayoutProps,
  HeaderProps,
  ContentProps,
  SideMenuProps,
  LinkProps,
};

// Styled components
export const Link = styled(_Link)``;

export const Layout = styled(_Layout)<LayoutProps>`
  min-height: 100vh;
`;

export const SubLayout = styled(_Layout)<LayoutProps>``;

export const Header = styled(_Header)<HeaderProps>`
  height: 48px !important;
  line-height: initial !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent !important;
  padding-inline: 24px !important;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.color.midGrey};
  `};
`;

export const LeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Content = styled(_Content)<ContentProps>``;

export const SideMenu = styled(_SideMenu)<SideMenuProps>`
  background-color: transparent !important;
`;

// Styled icon components
export const LogoTextIcon = styled(LogoTextSvg)`
  max-width: 126px;
  width: 100%;
  max-height: 24px;
  ${({ theme }) => css`
    color: ${theme.color.white};
  `};
`;
