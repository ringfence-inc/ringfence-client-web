// Hooks
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";

// Utils
import * as yup from "yup";

// Types
export type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useSignUpForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
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
