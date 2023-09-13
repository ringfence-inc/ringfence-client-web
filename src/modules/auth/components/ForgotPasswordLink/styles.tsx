import styled, { css } from "styled-components";

// Components
import LinkPrimary, { LinkProps } from "../LinkPrimary";

// Re export types
export type { LinkProps };

// Styled components
export const StyledLinkPrimary = styled(LinkPrimary)<LinkProps>`
  font-size: 14px;
  font-weight: 600;
`;
