// Hooks
import { useState } from "react";
import useGetCollectionImages from "../api/hooks/useGetCollectionImages";

// Utils
import isResponseHasItems from "@/shared/utils/isResponseHasItems";

// Types
import type { ColumnType } from "@/shared/ui/Table";
import type {
  GetCollectionImagesResponse,
  TCollectionImage,
} from "@/modules/dashboard/api/apiGetCollectionImages";
import type { CollectionImagesTableProps } from "../layouts/CollectionImagesTable";

// Components
import CollectionStatus from "../components/CollectionStatus";
import CollectionImageTitleThumbnail from "../components/CollectionImageTitleThumbnail";

// Types
export interface UseCollectionImagesTableReturn
  extends Partial<CollectionImagesTableProps> {
  mapData: (data: TCollectionImage[]) => TCollectionImage[];
  data: GetCollectionImagesResponse;
  hasSelected?: boolean;
  hasData?: boolean;
  selectedRowKeys: React.Key[];
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<React.Key[]>>;
}

export interface UseCollectionImagesTableProps {
  collectionId: number;
}

export const useCollectionImagesTable = ({
  collectionId,
}: UseCollectionImagesTableProps): UseCollectionImagesTableReturn => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data, isLoading } = useGetCollectionImages({
    collection_id: collectionId,
  });

  const columns: Array<ColumnType<TCollectionImage>> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <CollectionImageTitleThumbnail
          data={record}
          collectionId={collectionId}
        />
      ),
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
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

  const mapData = (data: TCollectionImage[]) => {
    return data.map((collection) => ({
      ...collection,
      key: String(collection.id),
    }));
  };

  return {
    columns,
    rowSelection,
    data: data as GetCollectionImagesResponse,
    mapData,
    loading: isLoading,
    hasSelected: selectedRowKeys?.length > 0,
    hasData: isResponseHasItems(data),
    selectedRowKeys,
    setSelectedRowKeys,
  };
};

export default useCollectionImagesTable;
