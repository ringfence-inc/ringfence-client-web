import styled, { css } from "styled-components";

// Styled components
export const NumText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.h3};
    font-style: italic;
  `};
`;

export const TopWrap = styled.div``;

export const CardTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.h2};
    line-height: 120%;
    margin-bottom: 16px;
  `};
`;

export const CardDescription = styled.span``;

export const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 480px;
  width: 100%;
  min-height: 555px;
  ${({ theme }) => css`
    color: ${theme.color.black};
    border-radius: ${theme.radius.lg};
    background-color: ${theme.color.white};
    padding: 48px 40px;
  `};
`;
