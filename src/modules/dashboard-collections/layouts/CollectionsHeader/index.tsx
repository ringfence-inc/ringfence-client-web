import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";

// Components
import Actions from "./components/Actions";
import NewCollectionButton from "./components/NewCollectionButton";

// Types
import type { UseCollectionsTableReturn } from "../../hooks/useCollectionsTable";
export interface CollectionsHeaderProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  table?: UseCollectionsTableReturn;
  disabledCreate?: boolean;
  onCreateClick?: () => void;
}

export const CollectionsHeader = ({
  table,
  disabledCreate = false,
  onCreateClick,
  ...props
}: CollectionsHeaderProps) => {
  const { hasSelected } = table || {};

  return (
    <Wrap {...props}>
      {hasSelected ? <Actions /> : <div />}
      <NewCollectionButton onClick={onCreateClick} disabled={disabledCreate} />
    </Wrap>
  );
};

export default CollectionsHeader;
