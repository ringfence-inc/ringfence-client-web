import styled, { css } from "styled-components";

// Styled components
export const Title = styled.h2`
  margin-bottom: 16px;
  ${({ theme }) => css`
    font-size: 28px;
    font-weight: ${theme.weight.bold};
  `};
`;

export default Title;
