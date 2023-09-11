import styled, { css } from "styled-components";

// Components
import AntdModal, { ModalProps } from "antd/lib/modal";

// Re export types
export type { ModalProps as AntdModalProps };

// Styled components
export const StyledModal = styled(AntdModal)<ModalProps>`
  .ant-modal-content {
    padding: 0 !important;
  }
`;
