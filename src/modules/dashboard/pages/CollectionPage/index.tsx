import { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  Title,
  CollectionHeader,
  PicturesGrid,
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

  const table = useCollectionImagesTable({
    collectionId: Number(collectionId),
  });
  const { data, loading, hasData } = table;

  return (
    <Wrap>
      {loading && <Spin />}

      {!loading && hasData && (
        <>
          <CollectionHeader />
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
