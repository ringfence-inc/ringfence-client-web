// Styles
import { SignUpForm, SignUpFormProps } from "./styles";

// Hooks
import useSignUpForm from "../../hooks/useSignUpForm";

// Types
export interface SignInPageProps extends SignUpFormProps {}

export const SignInPage = ({ ...props }: SignInPageProps) => {
  const { form, onSubmit } = useSignUpForm();

  return <SignUpForm {...props} form={form} onSubmit={onSubmit} />;
};

export default SignInPage;
