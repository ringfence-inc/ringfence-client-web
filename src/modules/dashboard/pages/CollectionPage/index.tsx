import { useState, HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  Title,
  CollectionHeader,
  PicturesGrid,
  UploadCollectionImages,
  CollectionImagesTable,
  Spin,
} from "./styles";

// Hooks
import { useParams } from "next/navigation";
import { useAppRouterState } from "@/shared/hooks/useAppRouterState";
import useCollectionImagesTable from "../../hooks/useCollectionImagesTable";

// Constants
import {
  GRID_VIEW_SWITCH_KEY,
  GRID_VIEW_SWITCH_GRID,
} from "../../components/GridViewSwitch";

// Types
import type { PictureProps } from "../../components/Picture";
import { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface CollectionPageProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export const CollectionPage = () => {
  const [title = ""] = useAppRouterState({ key: "title" });
  const [viewMode = GRID_VIEW_SWITCH_GRID] = useAppRouterState({
    key: GRID_VIEW_SWITCH_KEY,
  });
  const isGridView = viewMode === GRID_VIEW_SWITCH_GRID;
  const { collectionId } = useParams();
  const numCollectionId = Number(collectionId);

  const [showUpload, setShowUpload] = useState<boolean>(false);

  const table = useCollectionImagesTable({
    collectionId: numCollectionId,
  });
  const { data, loading, hasData, selectedRowKeys, setSelectedRowKeys } = table;

  const handleAddImagesClick = () => {
    setShowUpload(true);
  };

  const handleCheckboxClick = (e: any, data: TCollectionImage) => {
    const { id } = data;
    let removed = false;
    const filteredKeys = selectedRowKeys.filter((key) => {
      if (key === id) {
        removed = true;
        return false;
      }
      return true;
    });

    if (removed) {
      setSelectedRowKeys(filteredKeys);
    } else {
      setSelectedRowKeys([...selectedRowKeys, id]);
    }
  };

  const pictureProps: Partial<PictureProps> = {
    showOverlay: true,
    stashActions: !selectedRowKeys?.length,
    onCheckboxClick: handleCheckboxClick,
  };

  return (
    <Wrap>
      {loading && <Spin />}

      {!loading && hasData && (
        <>
          {(showUpload || (!loading && !hasData)) && (
            <UploadCollectionImages
              show={showUpload}
              setShow={setShowUpload}
              collectionId={numCollectionId}
              showClose={hasData}
            />
          )}
          <CollectionHeader
            onAddImagesClick={handleAddImagesClick}
            disableAdd={showUpload}
          />
          <Title>{title as string}</Title>
          {isGridView ? (
            <PicturesGrid
              items={data?.data || []}
              selectedKeys={selectedRowKeys}
              pictureProps={pictureProps}
            />
          ) : (
            <CollectionImagesTable table={table} />
          )}
        </>
      )}
    </Wrap>
  );
};

export default CollectionPage;
