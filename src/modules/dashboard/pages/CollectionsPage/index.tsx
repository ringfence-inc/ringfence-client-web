import { useState } from "react";

// Styles
import {
  Wrap,
  CreateCollection,
  CollectionsHeader,
  CollectionsTable,
} from "./styles";

// Hooks
import useCollectionsTable from "../../hooks/useCollectionsTable";

export const CollectionsPage = () => {
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const collectionsTable = useCollectionsTable();

  const handleCreateClick = () => {
    setShowCreate(true);
  };

  return (
    <Wrap>
      <CreateCollection
        table={collectionsTable}
        show={showCreate}
        setShow={setShowCreate}
      />
      <CollectionsHeader
        table={collectionsTable}
        onCreateClick={handleCreateClick}
        disabledCreate={showCreate}
      />
      <CollectionsTable table={collectionsTable} />
    </Wrap>
  );
};

export default CollectionsPage;
