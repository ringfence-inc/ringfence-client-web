// Hooks
import useUploadCollectionImages from "../api/hooks/useUploadCollectionImages";
import useGetCollectionImages from "../api/hooks/useGetCollectionImages";
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";
import useMutationMessage from "@/shared/hooks/useMutationMessage";

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
  const queryGet = useGetCollectionImages({ collection_id: collectionId });
  const { refetch } = queryGet;
  const { mutateAsync } = mutation;
  useMutationMessage({
    mutation,
    defaultSuccessMessage: "Images uploaded successfully",
  });

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

  const { handleSubmit, reset } = form;

  const onSubmit = handleSubmit(async (values: CollectionImagesFormValues) => {
    try {
      const images = values.images.map((image: any) => image?.originFileObj);
      console.log("upload collection images submit", values, images);
      try {
        await mutateAsync({ images, collection_id: collectionId });
        await refetch();
        reset();
      } catch (e) {}
    } catch (e) {
      console.log(e);
    }
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useUploadCollectionImagesForm;
