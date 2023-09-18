import styled, { css } from "styled-components";

// Styled components
export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.color.midGrey};
    border-radius: ${theme.radius.xss};

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: 0;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `};
`;
