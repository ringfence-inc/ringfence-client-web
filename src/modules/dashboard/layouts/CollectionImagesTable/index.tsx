// Styles
import { StyledTable, TableProps } from "./styles";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
import type { UseCollectionImagesTableReturn } from "../../hooks/useCollectionImagesTable";
export interface CollectionImagesTableProps
  extends TableProps<TCollectionImage> {
  table: UseCollectionImagesTableReturn;
}

export const CollectionImagesTable = ({
  table,
  ...props
}: CollectionImagesTableProps) => {
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

export default CollectionImagesTable;
