// Styles
import { StyledModal, ModalProps, SignInForm, SignUpForm } from "./styles";

// Types
export interface AuthModalProps extends ModalProps {}

// Hooks
import useAuthModal from "../../hooks/useAuthModal";
import useSignInForm from "../../hooks/useSignInForm";
import useSignUpForm from "../../hooks/useSignUpForm";

export const AuthModal = ({ ...props }: AuthModalProps) => {
  const { authMode, closeAuthModal } = useAuthModal();

  const signInFormProps = useSignInForm();
  const { form: signInForm, mutation: signInMutation } = signInFormProps;

  const signUpFormProps = useSignUpForm();
  const { form: signUpForm, mutation: signUpMutation } = signUpFormProps;

  const { isLoading: isSignInLoading } = signInMutation;
  const { isLoading: isSignUpLoading } = signUpMutation;

  const isLoading = isSignInLoading || isSignUpLoading;

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
