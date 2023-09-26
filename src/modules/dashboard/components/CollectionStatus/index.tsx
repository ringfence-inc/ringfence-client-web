// Styles
import { Wrap, Text, Dot, WrapProps, TCollectionStatus } from "./styles";

export const statusesText: Record<TCollectionStatus, string> = {
  checked: "Checked",
  detected: "Detected",
  in_progress: "In progress",
  not_checked: "Not checked",
};

// Types
import type { TCollection } from "../../api/apiGetCollections";
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface CollectionStatusProps extends WrapProps {
  data?: TCollection | TCollectionImage;
}

export const CollectionStatus = ({ data, ...props }: CollectionStatusProps) => {
  const { status } = data || {};

  return (
    <Wrap $status={status} {...props}>
      <Dot />
      <Text>{statusesText[status as TCollectionStatus] || "No status"}</Text>
      {props.children}
    </Wrap>
  );
};

export default CollectionStatus;
