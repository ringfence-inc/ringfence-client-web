import styled, { css } from "styled-components";

// Components
import { Text, Title, TextProps, TitleProps } from "@/shared/ui/Typography";

// Styled components
export const NumText = styled(Text)<TextProps>``;

export const TopWrap = styled.div``;

export const CardTitle = styled(Title)<TitleProps>``;

export const CardDescription = styled(Text)<TextProps>``;

export const BottomWrap = styled.div``;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    padding: 48px 40px;
  `};
`;
