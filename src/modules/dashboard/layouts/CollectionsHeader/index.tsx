import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, NewCollectionButton } from "./styles";

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
  return (
    <Wrap {...props}>
      <div />
      <NewCollectionButton onClick={onCreateClick} disabled={disabledCreate} />
    </Wrap>
  );
};

export default CollectionsHeader;
