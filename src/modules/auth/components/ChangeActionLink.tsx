import styled, { css } from "styled-components";

// Components
import { Link, LinkProps } from "@/shared/ui/Link";

// Re export types
export type { LinkProps };

export const ChangeActionLink = styled(Link)<LinkProps>`
  ${({ theme }) => css`
    margin-left: 4px;
    color: ${theme.color.primary};
  `};
`;

export default ChangeActionLink;
