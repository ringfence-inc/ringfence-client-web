import { useState } from "react";

// Styles
import {
  Wrap,
  CreateCollection,
  CollectionsHeader,
  CollectionsTable,
  NoCollections,
  Spin,
} from "./styles";

// Hooks
import useCollectionsTable from "../../hooks/useCollectionsTable";

export const CollectionsPage = () => {
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const collectionsTable = useCollectionsTable();
  const { loading, hasData } = collectionsTable;

  const handleCreateClick = () => {
    setShowCreate(true);
  };

  return (
    <Wrap>
      {loading && <Spin />}
      <CreateCollection
        table={collectionsTable}
        show={showCreate}
        setShow={setShowCreate}
      />
      {!loading && !hasData && (
        <NoCollections
          onCreateClick={handleCreateClick}
          disabled={showCreate}
        />
      )}
      {!loading && hasData && (
        <>
          <CollectionsHeader
            table={collectionsTable}
            onCreateClick={handleCreateClick}
            disabledCreate={showCreate}
          />
          <CollectionsTable table={collectionsTable} />
        </>
      )}
    </Wrap>
  );
};

export default CollectionsPage;
