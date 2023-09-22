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
  const { data, loading, hasData } = table;

  const handleAddImagesClick = () => {
    setShowUpload(true);
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
            <PicturesGrid items={data?.data || []} />
          ) : (
            <CollectionImagesTable table={table} />
          )}
        </>
      )}
    </Wrap>
  );
};

export default CollectionPage;
