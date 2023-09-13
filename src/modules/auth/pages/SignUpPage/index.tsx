// Styles
import { SignUpForm, SignUpFormProps } from "./styles";

// Hooks
import useSignUpForm from "../../hooks/useSignUpForm";

// Types
export interface SignInPageProps extends SignUpFormProps {}

export const SignInPage = ({ ...props }: SignInPageProps) => {
  const formProps = useSignUpForm();

  return <SignUpForm {...props} {...formProps} />;
};

export default SignInPage;
