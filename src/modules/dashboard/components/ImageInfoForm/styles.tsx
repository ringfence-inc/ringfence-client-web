import styled, { css } from "styled-components";

// Components
import Typography, { TypographyProps } from "@/shared/ui/Typography";
import _InfoItem, { InfoItemProps } from "./components/InfoItem";
import _InfoTable, { InfoTableProps } from "./components/InfoTable";
import _Image, { ImageProps } from "@/shared/ui/Image";

// Re export types
export type { InfoItemProps, InfoTableProps, TypographyProps };

// Styled components
export const TopWrap = styled.div`
  width: 100%;
`;

export const FormWrap = styled.form``;

export const SubWrap = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

export const Title = styled(Typography.H2)``;

export const RightWrap = styled.div``;

export const InfoItem = styled(_InfoItem)<InfoItemProps>``;

export const InfoTable = styled(_InfoTable)<InfoTableProps>`
  width: 100%;
`;

export const Image = styled(_Image)<ImageProps>``;
