// Hooks
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";
import useRecoveryPassword from "../api/hooks/useRecoveryPassword";

// Utils
import * as yup from "yup";

// Types
export type PasswordRecoveryFormValues = {
  email: string;
};

export const useRecoveryPasswordForm = () => {
  const mutation = useRecoveryPassword();
  const { mutateAsync } = mutation;

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  const resolver = useYupResolver(schema);

  const form = useForm<PasswordRecoveryFormValues>({
    resolver,
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (values: PasswordRecoveryFormValues) => {
    return await mutateAsync(values);
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useRecoveryPasswordForm;
