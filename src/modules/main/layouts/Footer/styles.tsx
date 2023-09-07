import styled, { css } from "styled-components";

// Components
import _Copyright, { CopyrightProps } from "../../components/Copyright";
import FooterLink, { FooterLinkProps } from "../../components/FooterLink";
import _SmallLogo, { SmallLogoProps } from "../../components/SmallLogo";

// Re export types
export type { SmallLogoProps, FooterLinkProps };

// Styled components
export const Copyright = styled(_Copyright)<CopyrightProps>``;

export const Link = styled(FooterLink)<FooterLinkProps>``;

export const SmallLogo = styled(_SmallLogo)<SmallLogoProps>``;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  opacity: 0.5;
`;

export const Wrap = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 72px 80px 96px 80px;
  ${({ theme }) => css`
    max-width: ${theme.maxWidth};
  `};
`;
