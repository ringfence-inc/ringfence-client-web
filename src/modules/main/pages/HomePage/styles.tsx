import styled, { css } from "styled-components";

// Styled components
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  ${({ theme }) => css`
    padding-left: ${theme.paddingLG}px;
    padding-right: ${theme.paddingLG}px;
  `};
`;
