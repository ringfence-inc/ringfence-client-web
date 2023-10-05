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

  .ant-modal-close {
    top: 32px;
    inset-inline-end: 32px;
  }

  ${({ theme }) => css`
    .ant-modal-close-icon {
      color: ${theme.color.white} !important;
    }
  `};
`;
