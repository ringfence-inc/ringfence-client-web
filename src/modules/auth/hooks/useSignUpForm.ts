// Hooks
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";

// Utils
import * as yup from "yup";

// Types
export type SignUpFormData = {
  name: string;
  email: string;
  country: string;
};

export const useSignUpForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    country: yup.string().required("Country is required"),
  });

  const resolver = useYupResolver(schema);

  const form = useForm<SignUpFormData>({
    resolver,
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit((data: SignUpFormData) => {
    console.log(data);
  });

  return {
    form,
    onSubmit,
  };
};

export default useSignUpForm;
