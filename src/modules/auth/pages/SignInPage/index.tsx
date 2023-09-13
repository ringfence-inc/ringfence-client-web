// Styles
import { SignInForm, SignInFormProps } from "./styles";

// Hooks
import useSignInForm from "../../hooks/useSignInForm";

// Types
export interface SignInPageProps extends SignInFormProps {}

export const SignInPage = ({ ...props }: SignInPageProps) => {
  const { form, onSubmit } = useSignInForm();

  return <SignInForm {...props} form={form} onSubmit={onSubmit} />;
};

export default SignInPage;
