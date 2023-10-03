import React from "react";

// Styles
import { Modal, ImageInfoForm, ModalProps } from "./styles";

// Hooks
import useGetCollectionImages from "../../api/hooks/useGetCollectionImages";
import useDeleteCollectionImages from "../../api/hooks/useDeleteCollectionImages";
import useMutationMessage from "@/shared/hooks/useMutationMessage";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface ImageInfoModalProps extends ModalProps {
  data?: Partial<TCollectionImage>;
  collectionId?: number;
}

export const ImageInfoModal = ({
  data = {},
  collectionId,
  onCancel,
  ...props
}: ImageInfoModalProps) => {
  const { title = "" } = data;

  const queryGet = useGetCollectionImages(
    { collection_id: collectionId as number },
    { enabled: !!collectionId }
  );
  const { refetch } = queryGet;

  const mutation = useDeleteCollectionImages();
  const { mutateAsync, isLoading } = mutation;
  const { messageApi } = useMutationMessage({
    mutation,
    defaultSuccessMessage: `Image ${
      title ? `${title} ` : ""
    }was successfully deleted`,
  });

  const handleCancel = (e: any) => {
    if (isLoading) return;
    onCancel?.(e);
  };

  const handleImageDelete = async (e: any) => {
    if (collectionId) {
      try {
        await mutateAsync({
          collection_id: collectionId as number,
          files_ids: [data.id as number],
        });

        try {
          await refetch();
        } catch (e) {}

        handleCancel(e);
      } catch (e) {}
    } else {
      messageApi.error("Unknown collection for image deletion");
    }
  };

  return (
    <Modal onCancel={handleCancel} {...props}>
      <ImageInfoForm
        data={data}
        onDeleteClick={handleImageDelete}
        loading={isLoading}
      />
    </Modal>
  );
};

export default ImageInfoModal;
