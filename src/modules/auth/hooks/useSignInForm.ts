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

export const useSignInForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
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

export default useSignInForm;
