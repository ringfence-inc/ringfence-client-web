// Styles
import { StyledModal, AntdModalProps } from "./styles";

// Types
export interface ModalProps extends AntdModalProps {}

export const Modal = ({ footer = null, ...props }: ModalProps) => {
  return (
    <StyledModal footer={footer} {...props}>
      {props.children}
    </StyledModal>
  );
};

export default Modal;
