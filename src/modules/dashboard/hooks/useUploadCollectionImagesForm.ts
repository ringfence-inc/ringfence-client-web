// Hooks
import useUploadCollectionImages from "../api/hooks/useUploadCollectionImages";
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";

// Utils
import * as yup from "yup";

// Types
import { UploadCollectionImagesRequest } from "../api/apiUploadCollectionImages";
export interface CollectionImagesFormValues
  extends UploadCollectionImagesRequest {}

export interface UseUploadCollectionImagesFormProps {
  collectionId: number;
}

export const useUploadCollectionImagesForm = ({
  collectionId,
}: UseUploadCollectionImagesFormProps) => {
  const mutation = useUploadCollectionImages();
  const { mutate } = mutation;

  const schema = yup.object().shape({
    images: yup
      .array()
      .of(yup.mixed().required("An image is required"))
      .required("At least one image is required"),
  });

  const resolver = useYupResolver(schema);

  const form = useForm<CollectionImagesFormValues>({
    resolver,
    shouldUnregister: true,
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (values: CollectionImagesFormValues) => {
    const images = values.images.map((image: any) => image?.originFileObj);
    console.log("upload collection images submit", values, images);
    await mutate({ images, collection_id: collectionId });
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useUploadCollectionImagesForm;
