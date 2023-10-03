import { HtmlHTMLAttributes, useState } from "react";

// Styles
import { Wrap, Thumbnail, Text, CollectionThumbnailProps } from "./styles";

// Components
import ImageInfoModal, { ImageInfoModalProps } from "../ImageInfoModal";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface CollectionImageTitleThumbnailProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  data?: Partial<TCollectionImage>;
  collectionId?: number;
}

export const CollectionImageTitleThumbnail = ({
  data = {},
  collectionId,
  ...props
}: CollectionImageTitleThumbnailProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { title = "", s3_url = "" } = data || {};

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Wrap onClick={handleShowModal} {...props}>
        <Thumbnail src={s3_url} />
        <Text>{title}</Text>
      </Wrap>
      <ImageInfoModal
        open={showModal}
        data={data}
        onCancel={handleCancelModal}
        collectionId={collectionId}
      />
    </>
  );
};

export default CollectionImageTitleThumbnail;
