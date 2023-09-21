// Styles
import { StyledTable, TableProps } from "./styles";

// Types
import type { GetCollectionsCollection } from "../../api/apiGetCollections";
import type { UseCollectionsTableReturn } from "../../hooks/useCollectionsTable";
export interface CollectionsTableProps
  extends TableProps<GetCollectionsCollection> {
  table: UseCollectionsTableReturn;
}

export const CollectionsTable = ({
  table,
  ...props
}: CollectionsTableProps) => {
  const {
    rowSelection = {},
    mapData = () => [],
    data = { data: [] },
    loading = false,
    columns = [],
  } = table || {};

  return (
    <StyledTable
      {...props}
      rowSelection={rowSelection}
      dataSource={mapData(data?.data || [])}
      loading={loading}
      columns={columns}
    />
  );
};

export default CollectionsTable;