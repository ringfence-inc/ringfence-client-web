// Styles
import { StyledModal, ModalProps, SignInForm, SignUpForm } from "./styles";

// Types
export interface AuthModalProps extends ModalProps {}

// Hooks
import useAuthModal, {
  SIGN_IN_KEY,
  SIGN_UP_KEY,
} from "../../hooks/useAuthModal";
import useSignInForm from "../../hooks/useSignInForm";
import useSignUpForm from "../../hooks/useSignUpForm";

export const AuthModal = ({ ...props }: AuthModalProps) => {
  const { modalState, closeAuthModal, openSignInModal, openSignUpModal } =
    useAuthModal();

  const { form: signInForm, onSubmit: onSignInSubmit } = useSignInForm();
  const { form: signUpForm, onSubmit: onSignUpSubmit } = useSignUpForm();

  const handleClose = () => {
    closeAuthModal();
  };

  return (
    <StyledModal open={!!modalState} onCancel={handleClose} {...props}>
      {modalState === "signIn" && (
        <SignInForm
          form={signInForm}
          onSubmit={onSignInSubmit}
          onLinkClick={openSignUpModal}
        />
      )}
      {modalState === "signUp" && (
        <SignUpForm
          form={signUpForm}
          onSubmit={onSignUpSubmit}
          onLinkClick={openSignInModal}
        />
      )}
    </StyledModal>
  );
};

export default AuthModal;
