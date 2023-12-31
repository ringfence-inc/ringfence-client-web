// Hooks
import useCreateCollection from "../api/hooks/useCreateCollection";
import useGetCollections from "../api/hooks/useGetCollections";
import { useForm } from "react-hook-form";
import useYupResolver from "../../../shared/hooks/useYupResolver";
import useMutationMessage from "../../../shared/hooks/useMutationMessage";

// Utils
import * as yup from "yup";

// Types
export type CollectionFormValues = {
  title: string;
};

export const useCreateCollectionForm = () => {
  const mutation = useCreateCollection();
  const { refetch } = useGetCollections();
  const { mutateAsync } = mutation;
  useMutationMessage({
    mutation,
    defaultSuccessMessage: "Collection created successfully",
  });

  const schema = yup.object().shape({
    title: yup.string().required("Name is required"),
  });

  const resolver = useYupResolver(schema);

  const form = useForm<CollectionFormValues>({
    resolver,
  });

  const { reset, handleSubmit } = form;

  const onSubmit = handleSubmit(async (values: CollectionFormValues) => {
    console.log("useCreateCollectionForm values", values);

    try {
      await mutateAsync(values);
      await refetch();

      reset();
    } catch (e) {}
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useCreateCollectionForm;
