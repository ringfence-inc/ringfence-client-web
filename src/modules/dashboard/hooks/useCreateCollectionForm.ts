// Hooks
import useCreateCollection from "../api/hooks/useCreateCollection";
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";

// Utils
import * as yup from "yup";

// Types
export type CollectionFormValues = {
  name: string;
  width: number;
  height: number;
  prompt: string;
};

export const useCreateCollectionForm = () => {
  const mutation = useCreateCollection();
  const { mutate } = mutation;

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    width: yup.number().required("Width is required"),
    height: yup.number().required("Height is required"),
    prompt: yup.string().required("Prompt is required"),
  });

  const resolver = useYupResolver(schema);

  const form = useForm<CollectionFormValues>({
    resolver,
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (values: CollectionFormValues) => {
    console.log("useCreateCollectionForm values", values);

    await mutate(values);
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useCreateCollectionForm;
