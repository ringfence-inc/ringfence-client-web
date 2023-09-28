import styled, { css } from "styled-components";

// Styled components
export const Wrap = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.color.midGrey};
    border-radius: ${theme.radius.xss};
    padding: 16px 12px 24px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  `};
`;
