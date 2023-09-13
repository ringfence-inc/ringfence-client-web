import styled, { css } from "styled-components";

// Components
import { Modal, ModalProps } from "../Modal";
import _SignInForm from "../SignInForm";
import _SignUpForm from "../SignUpForm";

// Re export types
export type { ModalProps };

// Styled CSS
export const formsCss = css`
  padding: 64px 40px;
`;

// Styled components
export const SignInForm = styled(_SignInForm)`
  ${formsCss};
`;
export const SignUpForm = styled(_SignUpForm)`
  ${formsCss};
`;
export const StyledModal = styled(Modal)<ModalProps>``;
