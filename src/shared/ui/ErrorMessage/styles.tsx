import styled, { css } from "styled-components";

// Styled components
export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colorErrorText};
  `};
`;
