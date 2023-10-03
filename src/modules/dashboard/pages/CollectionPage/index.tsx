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

  const [stateShowUpload, setStateShowUpload] = useState<boolean>(false);

  const table = useCollectionImagesTable({
    collectionId: numCollectionId,
  });
  const { data, loading, hasData, selectedRowKeys, setSelectedRowKeys } = table;

  const handleAddImagesClick = () => {
    setStateShowUpload(true);
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
      setSelectedRowKeys([...selectedRowKeys, id as React.Key]);
    }
  };

  const pictureProps: Partial<PictureProps> = {
    showOverlay: true,
    stashActions: !selectedRowKeys?.length,
    onCheckboxClick: handleCheckboxClick,
  };

  const showUpload = stateShowUpload || (!loading && !hasData);

  return (
    <Wrap>
      {loading && <Spin />}

      {!loading && (
        <>
          <UploadCollectionImages
            show={showUpload}
            setShow={setStateShowUpload}
            collectionId={numCollectionId}
            showClose={hasData}
          />
          <CollectionHeader
            onAddImagesClick={handleAddImagesClick}
            disableAdd={showUpload}
          />
          <Title>{title as string}</Title>
          {isGridView ? (
            <PicturesGrid
              items={data?.items || []}
              selectedKeys={selectedRowKeys}
              pictureProps={pictureProps}
              loading={loading}
              collectionId={numCollectionId}
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
