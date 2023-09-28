import styled, { css } from "styled-components";

// Styled components
export const Wrap = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.color.midGrey};
  `};
`;
