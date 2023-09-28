import styled, { css } from "styled-components";

// Components
import _Modal, { ModalProps } from "@/shared/ui/Modal";
import _ImageInfoForm, { ImageInfoFormProps } from "../ImageInfoForm";

// Re export types
export type { ModalProps, ImageInfoFormProps };

// Styled components
export const Modal = styled(_Modal)<ModalProps>``;

export const ImageInfoForm = styled(_ImageInfoForm)<ImageInfoFormProps>``;
