import styled, { css } from "styled-components";

// Styled components
export const SubTitle = styled.span`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.lg};
  `};
`;

export default SubTitle;
