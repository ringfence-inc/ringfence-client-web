// Hooks
import { useState } from "react";
import useGetCollections from "../api/hooks/useGetCollections";

// Utils
import isResponseHasItems from "@/shared/utils/isResponseHasItems";
import tableDateRender from "@/shared/utils/tableDateRender";

// Types
import type { ColumnType } from "@/shared/ui/Table";
import type { GetCollectionsResponse } from "@/modules/dashboard/api/apiGetCollections";
import type { CollectionsTableProps } from "../layouts/CollectionsTable";
import type { TCollection } from "@/modules/dashboard/api/apiGetCollections";

// Components
import Link from "@/shared/ui/Link";
import CollectionStatus from "../components/CollectionStatus";

// Types
export interface UseCollectionsTableReturn
  extends Partial<CollectionsTableProps> {
  mapData: (data: TCollection[]) => TCollection[];
  data: GetCollectionsResponse;
  hasSelected?: boolean;
  hasData?: boolean;
}

export const useCollectionsTable = (): UseCollectionsTableReturn => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data, isLoading } = useGetCollections();

  const columns: Array<ColumnType<TCollection>> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Link
          href={`/dashboard/collections/${record?.id}?title=${record?.title}`}
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: tableDateRender,
    },
    {
      title: "Created",
      dataIndex: "count_generated_images",
      key: "count_generated_images",
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

  const mapData = (data: TCollection[]) => {
    return data.map((collection) => ({
      ...collection,
      key: String(collection.id),
    }));
  };

  return {
    columns,
    rowSelection,
    data: data as GetCollectionsResponse,
    mapData,
    loading: isLoading,
    hasSelected: selectedRowKeys?.length > 0,
    hasData: isResponseHasItems(data),
  };
};

export default useCollectionsTable;
