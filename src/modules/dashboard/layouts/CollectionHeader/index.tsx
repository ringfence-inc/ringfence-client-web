import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, ViewSwitch } from "./styles";

// Components
import Actions from "./components/Actions";
import AddImagesButton from "./components/AddImagesButton";

// Types
import type { UseCollectionsTableReturn } from "../../hooks/useCollectionsTable";
export interface CollectionHeaderProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  collectionId?: number;
  table?: UseCollectionsTableReturn;
  disableAdd?: boolean;
  onAddImagesClick?: () => void;
}

export const CollectionHeader = ({
  table,
  disableAdd = false,
  collectionId,
  onAddImagesClick,
  ...props
}: CollectionHeaderProps) => {
  const { hasSelected } = table || {};

  return (
    <Wrap {...props}>
      <ViewSwitch />
      {hasSelected ? <Actions {...{ table, collectionId }} /> : <div />}
      <AddImagesButton onClick={onAddImagesClick} disabled={disableAdd} />
    </Wrap>
  );
};

export default CollectionHeader;
