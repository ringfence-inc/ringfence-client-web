import styled, { css } from "styled-components";

// Components
import _CollectionHeader, {
  CollectionHeaderProps,
} from "../../layouts/CollectionHeader";
import Typography, { TypographyProps } from "../../../../shared/ui/Typography";
import _CollectionImagesTable, {
  CollectionImagesTableProps,
} from "../../layouts/CollectionImagesTable";
import _PicturesGrid, { PicturesGridProps } from "../../../dashboard/layouts/PicturesGrid";
import _Spin, { SpinProps } from "../../../../shared/ui/Spin";
import _UploadCollectionImages, {
  UploadCollectionImagesProps,
} from "../../layouts/UploadCollectionImages";

// Re export types
export type {
  CollectionHeaderProps,
  CollectionImagesTableProps,
  UploadCollectionImagesProps,
};

// Styled components
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CollectionHeader = styled(
  _CollectionHeader
)<CollectionHeaderProps>``;
export const Title = styled(Typography.H1)<TypographyProps>`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const CollectionImagesTable = styled(
  _CollectionImagesTable
)<CollectionImagesTableProps>``;

export const Spin = styled(_Spin).attrs(() => ({
  size: "large",
}))<SpinProps>``;

export const UploadCollectionImages = styled(
  _UploadCollectionImages
)<UploadCollectionImagesProps>``;

export const PicturesGrid = styled(_PicturesGrid)<PicturesGridProps>``;
