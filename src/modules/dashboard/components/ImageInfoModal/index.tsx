import React from "react";

// Styles
import { Modal, ImageInfoForm, ModalProps } from "./styles";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface ImageInfoModalProps extends ModalProps {
  data?: Partial<TCollectionImage>;
}

export const ImageInfoModal = ({
  data = {},
  ...props
}: ImageInfoModalProps) => {
  return (
    <Modal {...props}>
      <ImageInfoForm data={data} />
    </Modal>
  );
};

export default ImageInfoModal;
