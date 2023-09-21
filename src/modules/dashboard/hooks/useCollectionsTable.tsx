// Hooks
import { useState } from "react";
import useGetCollections from "../api/hooks/useGetCollections";

// Types
import type { ColumnType } from "@/shared/ui/Table";
import type { GetCollectionsResponse } from "@/modules/dashboard/api/apiGetCollections";
import type { CollectionsTableProps } from "../layouts/CollectionsTable";
import type { GetCollectionsCollection } from "@/modules/dashboard/api/apiGetCollections";

// Components
import CollectionStatus from "../components/CollectionStatus";

// Types
export interface UseCollectionsTableReturn
  extends Partial<CollectionsTableProps> {
  mapData: (data: GetCollectionsCollection[]) => GetCollectionsCollection[];
  data: GetCollectionsResponse;
}

export const useCollectionsTable = (): UseCollectionsTableReturn => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data, isLoading } = useGetCollections();

  const columns: Array<ColumnType<GetCollectionsCollection>> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Created Count",
      dataIndex: "createdCount",
      key: "createdCount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => <CollectionStatus data={record} />,
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const mapData = (data: GetCollectionsCollection[]) => {
    return data.map((collection) => ({
      ...collection,
      key: collection.id,
    }));
  };

  return {
    columns,
    rowSelection,
    data: data as GetCollectionsResponse,
    mapData,
    loading: isLoading,
  };
};

export default useCollectionsTable;
