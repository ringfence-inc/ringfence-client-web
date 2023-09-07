import styled, { css } from "styled-components";

// Components
import _SmallLogo, { SmallLogoProps } from "../../components/SmallLogo";

// Re export types
export type { SmallLogoProps };

// Styled components
export const SmallLogo = styled(_SmallLogo)<SmallLogoProps>``;

export const SocialLinks = styled.div``;

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
