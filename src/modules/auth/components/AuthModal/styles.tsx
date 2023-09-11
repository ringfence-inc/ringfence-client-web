import styled, { css } from "styled-components";

// Components
import { Modal, ModalProps } from "../Modal";
import _SignInForm from "../SignInForm";
import _SignUpForm from "../SignUpForm";

// Re export types
export type { ModalProps };

// Styled components
export const SignInForm = styled(_SignInForm)``;
export const SignUpForm = styled(_SignUpForm)``;
export const StyledModal = styled(Modal)<ModalProps>``;
