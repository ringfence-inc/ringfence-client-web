import styled, { css } from "styled-components";

// Styled components css
export const commonTypographyCss = css`
  ${({ theme }) => css`
    color: ${theme.color.text};
  `};
`;

export const titleTypographyCss = css`
  text-transform: uppercase;
`;

export const paragraphTypographyCss = css``;

// Styled components
export const H1 = styled.h1`
  ${commonTypographyCss};
  ${titleTypographyCss};
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
`;

export const H2 = styled.h2`
  ${commonTypographyCss};
  ${titleTypographyCss};
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

export const H3 = styled.h3`
  ${commonTypographyCss};
  ${titleTypographyCss};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export const RegularP = styled.p`
  ${commonTypographyCss};
  ${paragraphTypographyCss};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const SmallP = styled.p`
  ${commonTypographyCss};
  ${paragraphTypographyCss};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const RegularText = styled.span`
  ${commonTypographyCss};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

export const SmallText = styled.span`
  ${commonTypographyCss};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const Text = styled.span``;
