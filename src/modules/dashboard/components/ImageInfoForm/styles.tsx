import styled, { css } from "styled-components";

// Components
import Typography, { TypographyProps } from "@/shared/ui/Typography";
import _InfoItem, { InfoItemProps } from "./components/InfoItem";
import _InfoTable, { InfoTableProps } from "./components/InfoTable";
import _Image, { ImageProps } from "@/shared/ui/Image";
import Button, { ButtonProps } from "@/shared/ui/Button";

// Re export types
export type { InfoItemProps, InfoTableProps, TypographyProps };

// Styled components
export const TopWrap = styled.div`
  width: 100%;
`;

export const DeleteButton = styled(Button).attrs<ButtonProps>({
  danger: true,
  type: "primary",
})`
  ${({ theme }) => css`
    margin-top: ${theme.m.md};
  `};
`;

export const FormWrap = styled.form`
  width: 100%;
  ${({ theme }) => css`
    padding: ${theme.m.xl};
  `};
`;

export const SubWrap = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

export const Title = styled(Typography.H2)`
  ${({ theme }) => css`
    margin-bottom: ${theme.m.lg};
  `};
`;

export const RightWrap = styled.div`
  width: 100%;
`;

export const InfoItem = styled(_InfoItem)<InfoItemProps>`
  margin-top: 12px;
`;

export const InfoTable = styled(_InfoTable)<InfoTableProps>`
  width: 100%;
`;

export const Image = styled(_Image)<ImageProps>`
  ${({ theme }) => css`
    img {
      border-radius: ${theme.radius.xss};
    }
  `};
`;
