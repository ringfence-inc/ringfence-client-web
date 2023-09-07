import styled, { css } from "styled-components";

// Styled components
export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.white};
  `};
`;
