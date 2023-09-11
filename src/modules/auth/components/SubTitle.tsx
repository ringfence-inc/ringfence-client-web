import styled, { css } from "styled-components";

// Styled components
export const SubTitle = styled.span`
  margin-bottom: 40px;
  ${({ theme }) => css`
    font-size: ${theme.font.lg};
  `};
`;

export default SubTitle;
