// Styles
import { StyledModal, ModalProps, SignInForm, SignUpForm } from "./styles";

// Types
export interface AuthModalProps extends ModalProps {}

// Hooks
import { useEffect } from "react";
import useAuthModal from "../../hooks/useAuthModal";
import useSignInForm from "../../hooks/useSignInForm";
import useSignUpForm from "../../hooks/useSignUpForm";

export const AuthModal = ({ ...props }: AuthModalProps) => {
  const { authMode, email, closeAuthModal, openSignInModal, openSignUpModal } =
    useAuthModal();

  const signInFormProps = useSignInForm();
  const { form: signInForm, mutation: signInMutation } = signInFormProps;
  const { setValue: setSignInValue, trigger: signInTrigger } = signInForm;

  const signUpFormProps = useSignUpForm();
  const { form: signUpForm, mutation: signUpMutation } = signUpFormProps;
  const { setValue: setSignUpValue, trigger: signUpTrigger } = signUpForm;

  const { isLoading: isSignInLoading } = signInMutation;
  const { isLoading: isSignUpLoading } = signUpMutation;

  const isLoading = isSignInLoading || isSignUpLoading;

  useEffect(() => {
    if (email) {
      setSignInValue("email", email);
      signInTrigger("email");
      setSignUpValue("email", email);
      signUpTrigger("email");
    }
  }, [authMode, setSignInValue, setSignUpValue]);

  const handleClose = () => {
    if (isLoading) return;
    closeAuthModal();
  };

  return (
    <StyledModal open={!!authMode} onCancel={handleClose} {...props}>
      {authMode === "signIn" && <SignInForm {...signInFormProps} />}
      {authMode === "signUp" && <SignUpForm {...signUpFormProps} />}
    </StyledModal>
  );
};

export default AuthModal;
