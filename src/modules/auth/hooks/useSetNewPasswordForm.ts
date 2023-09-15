// Hooks
import { useForm } from "react-hook-form";
import useYupResolver from "@/shared/hooks/useYupResolver";
import useSetNewPassword from "../api/hooks/useSetNewPassword";

// Utils
import * as yup from "yup";

// Types
export type SetNewPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

export const useSetNewPasswordForm = () => {
  const mutation = useSetNewPassword();
  const { mutate } = mutation;

  const schema = yup.object().shape({
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

  const form = useForm<SetNewPasswordFormValues>({
    resolver,
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (values: SetNewPasswordFormValues) => {
    const { password } = values;
    return await mutate({ password, code: "PASTE CODE HERE" });
  });

  return {
    form,
    mutation,
    onSubmit,
  };
};

export default useSetNewPasswordForm;
