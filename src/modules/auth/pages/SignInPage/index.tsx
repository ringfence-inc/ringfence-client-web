// Styles
import { SignInForm, SignInFormProps } from "./styles";

// Hooks
import useSignInForm from "../../hooks/useSignInForm";

export const SignInPage = ({ ...props }: any) => {
  const formProps = useSignInForm();

  return <SignInForm {...formProps} />;
};

export default SignInPage;
