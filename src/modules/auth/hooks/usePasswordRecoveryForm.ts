// Hooks
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";

// Utils
import * as yup from "yup";

// Types
export type PasswordRecoveryFormData = {
  email: string;
};

export const usePasswordRecoveryForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  const resolver = useYupResolver(schema);

  const form = useForm<PasswordRecoveryFormData>({
    resolver,
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit((data: PasswordRecoveryFormData) => {
    console.log(data);
    // Send password recovery email to the provided email address
  });

  return {
    form,
    onSubmit,
  };
};

export default usePasswordRecoveryForm;
