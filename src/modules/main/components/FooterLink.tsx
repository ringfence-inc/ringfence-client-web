import styled, { css } from "styled-components";

// Components
import Link, { LinkProps } from "@/shared/ui/Link";

export interface FooterLinkProps extends LinkProps {}

export const FooterLink = styled(Link)`
  ${({ theme }) => css`
    font-weight: ${theme.weight.bold};
    color: ${theme.color.white};
  `};
`;

export default FooterLink;
