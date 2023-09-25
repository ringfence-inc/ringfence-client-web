import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, Thumbnail, Text, CollectionThumbnailProps } from "./styles";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface CollectionNameThumbnailProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  data?: Partial<TCollectionImage>;
}

export const CollectionNameThumbnail = ({
  data = {},
  ...props
}: CollectionNameThumbnailProps) => {
  const { name = "", thumbnail } = data || {};

  return (
    <Wrap {...props}>
      <Thumbnail src={thumbnail} />
      <Text>{name}</Text>
    </Wrap>
  );
};

export default CollectionNameThumbnail;
