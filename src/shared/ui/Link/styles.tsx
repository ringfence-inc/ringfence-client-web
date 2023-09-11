import styled, { css } from "styled-components";

// Components
import Link, { LinkProps } from "next/link";

// Re export types
export type { LinkProps as NextLinkProps };

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: none;
    &[data-disabled="true"] {
      cursor: default;
    }
  `};
`;
