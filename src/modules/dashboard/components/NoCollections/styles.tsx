import styled, { css } from "styled-components";

// Icons
import PlusSvg from "public/icons/plus.svg";

// Components
import Typography, { TypographyProps } from "@/shared/ui/Typography";
import _Button, { ButtonProps } from "@/shared/ui/Button";

// Re export types
export type { TypographyProps };

// Styled components
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 269px;
  ${({ theme }) => css`
    background-color: ${theme.color.darkGrey};
    border-radius: ${theme.radius.lg};
  `};
`;

export const Title = styled(Typography.H1)`
  margin-bottom: 32px;
`;

export const Button = styled(_Button).attrs(() => ({
  type: "primary",
  size: "middle",
}))<ButtonProps>``;

// Styled icons
export const PlusIcon = styled(PlusSvg)`
  width: 20px;
  height: 20px;
`;
