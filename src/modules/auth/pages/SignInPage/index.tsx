// Styles
import { SignInForm, SignInFormProps } from "./styles";

// Hooks
import useSignInForm from "../../hooks/useSignInForm";

// Types
export interface SignInPageProps extends SignInFormProps {}

export const SignInPage = ({ ...props }: SignInPageProps) => {
  const formProps = useSignInForm();

  return <SignInForm {...props} {...formProps} />;
};

export default SignInPage;
