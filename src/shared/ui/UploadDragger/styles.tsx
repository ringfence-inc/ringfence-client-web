import styled, { css } from "styled-components";

// Icons
import CloudUploadSvg from "public/icons/cloud-upload.svg";

// Components
import Typography, { TypographyProps } from "@/shared/ui/Typography";
import Upload, {
  DraggerProps,
  UploadChangeParam,
  RcFile,
  UploadFile,
  UploadListProps,
} from "antd/lib/upload";
const { Dragger } = Upload;

// Re export types
export type {
  DraggerProps as AntdDraggerProps,
  UploadChangeParam,
  RcFile,
  UploadFile,
  UploadListProps,
};

// Styled components
export const StyledDragger = styled(Dragger)<DraggerProps>`
  ${({ theme }) => css`
    display: block;

    .ant-upload-drag {
      &:hover {
        border-color: ${theme.color.primary} !important;
      }
    }

    .ant-upload-drag-hover {
      border-color: ${theme.color.primary};
    }
  `};
`;

export const SubWrap = styled.div``;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TextSubWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled(Typography.RegularText)<TypographyProps>``;

export const OrText = styled(Typography.RegularText)<TypographyProps>`
  ${({ theme }) => css`
    color: ${theme.color.grey};
  `};
`;

export const PrimaryText = styled(Typography.RegularText)<TypographyProps>`
  ${({ theme }) => css`
    color: ${theme.color.primary};
  `};
`;

// Styled icons
export const CloudUploadIcon = styled(CloudUploadSvg)`
  width: 48px;
  height: 48px;
`;
