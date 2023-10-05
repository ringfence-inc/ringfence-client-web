import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, LeftWrap, ViewSwitch } from "./styles";

// Components
import Actions from "./components/Actions";
import AddImagesButton from "./components/AddImagesButton";

// Types
import type { UseCollectionImagesTableReturn } from "../../hooks/useCollectionImagesTable";
export interface CollectionHeaderProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  collectionId?: number;
  table?: UseCollectionImagesTableReturn;
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
      <LeftWrap>
        <ViewSwitch />
        {hasSelected ? <Actions {...{ table, collectionId }} /> : <div />}
      </LeftWrap>
      <AddImagesButton onClick={onAddImagesClick} disabled={disableAdd} />
    </Wrap>
  );
};

export default CollectionHeader;
