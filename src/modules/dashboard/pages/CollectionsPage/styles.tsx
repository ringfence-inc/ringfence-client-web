import styled, { css } from "styled-components";

// Components
import _CreateCollection, {
  CreateCollectionProps,
} from "../../layouts/CreateCollection";
import _CollectionsHeader, {
  CollectionsHeaderProps,
} from "../../layouts/CollectionsHeader";
import _CollectionsTable, {
  CollectionsTableProps,
} from "../../layouts/CollectionsTable";

// Re export types
export type {
  CreateCollectionProps,
  CollectionsHeaderProps,
  CollectionsTableProps,
};

// Styled components
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CreateCollection = styled(
  _CreateCollection
)<CreateCollectionProps>`
  margin-bottom: 40px;
`;

export const CollectionsHeader = styled(
  _CollectionsHeader
)<CollectionsHeaderProps>`
  margin-bottom: 40px;
`;

export const CollectionsTable = styled(
  _CollectionsTable
)<CollectionsTableProps>``;
