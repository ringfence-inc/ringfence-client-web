// Types
import type { SignUpFormValues } from "@/modules/auth/hooks/useSignUpForm";

export const fakeCreateAccount = async (values: SignUpFormValues) => {
  return {
    message: "Account created successfully",
  };
};
