// Styles
import { StyledTable, TableProps } from "./styles";

// Types
import type { TCollection } from "../../api/apiGetCollections";
import type { UseCollectionsTableReturn } from "../../hooks/useCollectionsTable";
export interface CollectionsTableProps extends TableProps<TCollection> {
  table: UseCollectionsTableReturn;
}

export const CollectionsTable = ({
  table,
  ...props
}: CollectionsTableProps) => {
  const {
    rowSelection = {},
    mapData = () => [],
    data = { items: [] },
    loading = false,
    columns = [],
  } = table || {};

  return (
    <StyledTable
      {...props}
      rowSelection={rowSelection}
      dataSource={mapData(data?.items || [])}
      loading={loading}
      columns={columns}
    />
  );
};

export default CollectionsTable;
