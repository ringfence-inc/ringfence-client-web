// Hooks
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";
import useLogin from "../api/hooks/useLogin";
import useAuthModal from "./useAuthModal";
import { useRouter } from "next/navigation";

// Utils
import * as yup from "yup";

// Types
export type SignInFormValues = {
  email: string;
  password: string;
};

export const useSignInForm = () => {
  const router = useRouter();
  const { email } = useAuthModal();

  const mutation = useLogin(
    {},
    {
      onSuccess: () => {
        setTimeout(() => {
          router.push("/dashboard");
        }, 500);
      },
    }
  );
  const { mutate } = mutation;

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const resolver = useYupResolver(schema);

  const form = useForm<SignInFormValues>({
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

  const onSubmit = handleSubmit(async (values: SignInFormValues) => {
    return await mutate(values);
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useSignInForm;
