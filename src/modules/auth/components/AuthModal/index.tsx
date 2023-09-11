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

  const { form: signInForm, onSubmit: onSignInSubmit } = useSignInForm();
  const { form: signUpForm, onSubmit: onSignUpSubmit } = useSignUpForm();
  const { setValue: setSignInValue, trigger: signInTrigger } = signInForm;
  const { setValue: setSignUpValue, trigger: signUpTrigger } = signUpForm;

  useEffect(() => {
    if (email) {
      setSignInValue("email", email);
      signInTrigger("email");
      setSignUpValue("email", email);
      signUpTrigger("email");
    }
  }, [authMode, setSignInValue, setSignUpValue]);

  const handleClose = () => {
    closeAuthModal();
  };

  return (
    <StyledModal open={!!authMode} onCancel={handleClose} {...props}>
      {authMode === "signIn" && (
        <SignInForm
          form={signInForm}
          onSubmit={onSignInSubmit}
          onLinkClick={openSignUpModal}
        />
      )}
      {authMode === "signUp" && (
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
