// Hooks
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";
import useCreateAccount from "../api/hooks/useCreateAccount";
import useAuthModal from "./useAuthModal";

// Utils
import * as yup from "yup";

// Types
export type SignUpFormValues = {
  email: string;
  nick_name: string;
  password: string;
  confirmPassword: string;
};

export const useSignUpForm = () => {
  const { email } = useAuthModal();
  const mutation = useCreateAccount();
  console.log("sign up mutation", mutation);
  const { mutateAsync } = mutation;

  const schema = yup.object().shape({
    nick_name: yup
      .string()
      .min(4, "Nickname must be at least 4 characters long")
      .max(16, "The length of the nickname should not exceed 16 characters")
      .required("Nick name is required"),
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

  const form = useForm<SignUpFormValues>({
    resolver,
  });

  const {
    handleSubmit,
    formState: { isDirty },
    setValue,
    trigger,
  } = form;

  useEffect(() => {
    if (email && !isDirty) {
      setValue("email", email);
      trigger("email");
    }
  }, [email]);

  const onSubmit = handleSubmit(async (values: SignUpFormValues) => {
    const { email, password, nick_name } = values;

    await mutateAsync({ email, password, nick_name });
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useSignUpForm;
