// Styles
import { Wrap, Text, Dot, WrapProps, TCollectionStatusTitle } from "./styles";

export const statusesText: Record<TCollectionStatusTitle, string> = {
  checked: "Checked",
  detected: "Detected",
  "in progress": "In progress",
  "not checked": "Not checked",
};

// Types
import type { TCollection } from "../../api/apiGetCollections";
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface CollectionStatusProps extends WrapProps {
  data?: TCollection | TCollectionImage;
}

export const CollectionStatus = ({ data, ...props }: CollectionStatusProps) => {
  const { status = {} } = data || {};
  const { title = "" } = status;

  return (
    <Wrap $status={title as TCollectionStatusTitle} {...props}>
      <Dot />
      <Text>
        {statusesText[title as TCollectionStatusTitle] || "No status"}
      </Text>
      {props.children}
    </Wrap>
  );
};

export default CollectionStatus;
