// Styles
import { SignUpForm, SignUpFormProps } from "./styles";

// Hooks
import useSignUpForm from "../../hooks/useSignUpForm";

export const SignInPage = ({ ...props }: any) => {
  const formProps = useSignUpForm();

  return <SignUpForm {...formProps} />;
};

export default SignInPage;
