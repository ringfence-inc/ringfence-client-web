import styled, { css } from "styled-components";

// Styled components
export const OrText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sm};
    opacity: 0.5;
  `};
`;

export default OrText;
