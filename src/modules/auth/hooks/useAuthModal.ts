// Hooks
import { useAppRouterState } from "@/shared/hooks/useAppRouterState";

// Constants
export const AUTH_MODAL_KEY = "authModal";
export const SIGN_IN_KEY = "signIn";
export const SIGN_UP_KEY = "signUp";

export const useAuthModal = (emailValue?: string) => {
  const [emailState, setEmailState] = useAppRouterState("email");
  const [modalState, setModalState] = useAppRouterState(AUTH_MODAL_KEY);

  const handleEmailValue = () => {
    if (emailValue) {
      setEmailState(emailValue);
    }
  };

  const openSignInModal = (e?: any) => {
    e?.preventDefault?.();

    handleEmailValue();
    setModalState(SIGN_IN_KEY);
  };

  const openSignUpModal = (e?: any) => {
    e?.preventDefault?.();

    handleEmailValue();
    setModalState(SIGN_UP_KEY);
  };

  const closeAuthModal = (e?: any) => {
    e?.preventDefault?.();

    setModalState(undefined);
  };

  return {
    modalState,
    setModalState,
    openSignInModal,
    openSignUpModal,
    closeAuthModal,
  };
};

export default useAuthModal;
