import { HtmlHTMLAttributes, useState } from "react";

// Styles
import { Wrap, Thumbnail, Text, CollectionThumbnailProps } from "./styles";

// Components
import ImageInfoModal, { ImageInfoModalProps } from "../ImageInfoModal";

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
  const [showModal, setShowModal] = useState<boolean>(false);
  const { name = "", thumbnail } = data || {};

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Wrap onClick={handleShowModal} {...props}>
        <Thumbnail src={thumbnail} />
        <Text>{name}</Text>
      </Wrap>
      <ImageInfoModal
        open={showModal}
        data={data}
        onCancel={handleCancelModal}
      />
    </>
  );
};

export default CollectionNameThumbnail;
