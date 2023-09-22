// Styles
import { Wrap, Dot, WrapProps, TCollectionStatus } from "./styles";

export const statusesText: Record<TCollectionStatus, string> = {
  checked: "Checked",
  detected: "Detected",
  in_progress: "In progress",
  not_checked: "Not checked",
};

// Types
import type { GetCollectionsCollection } from "../../api/apiGetCollections";
import type { CollectionImage } from "../../api/apiGetCollectionImages";
export interface CollectionStatusProps extends WrapProps {
  data?: GetCollectionsCollection | CollectionImage;
}

export const CollectionStatus = ({ data, ...props }: CollectionStatusProps) => {
  const { status } = data || {};

  return (
    <Wrap $status={status} {...props}>
      <Dot />
      {statusesText[status as TCollectionStatus] || "No status"}
      {props.children}
    </Wrap>
  );
};

export default CollectionStatus;
