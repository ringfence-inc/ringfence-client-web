// Hooks
import { useAppRouterState } from "@/shared/hooks/useAppRouterState";

// Constants
export const AUTH_MODAL_KEY = "authMode";
export const EMAIL_KEY = "email";
export const SIGN_IN_KEY = "signIn";
export const SIGN_UP_KEY = "signUp";

export const useAuthModal = (emailValue?: string) => {
  const [modalQuery, setModalQuery] = useAppRouterState({
    key: [AUTH_MODAL_KEY, EMAIL_KEY],
  });
  const { email, authMode } = modalQuery as any;

  const openSignInModal = (e?: any) => {
    e?.preventDefault?.();

    setModalQuery({
      [AUTH_MODAL_KEY]: SIGN_IN_KEY,
      [EMAIL_KEY]: emailValue || email,
    });
  };

  const openSignUpModal = (e?: any) => {
    e?.preventDefault?.();

    setModalQuery({
      [AUTH_MODAL_KEY]: SIGN_UP_KEY,
      [EMAIL_KEY]: emailValue || email,
    });
  };

  const closeAuthModal = (e?: any) => {
    e?.preventDefault?.();

    setModalQuery({
      [AUTH_MODAL_KEY]: undefined,
      [EMAIL_KEY]: undefined,
    });
  };

  return {
    modalQuery,
    setModalQuery,
    openSignInModal,
    openSignUpModal,
    closeAuthModal,
    email,
    authMode,
  };
};

export default useAuthModal;
