// Styles
import { StyledTable, TableProps } from "./styles";

// Types
import type { CollectionImage } from "../../api/apiGetCollectionImages";
import type { UseCollectionImagesTableReturn } from "../../hooks/useCollectionImagesTable";
export interface CollectionImagesTableProps
  extends TableProps<CollectionImage> {
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
