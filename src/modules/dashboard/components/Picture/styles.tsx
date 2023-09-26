import styled, { css } from "styled-components";

// Icons
import ExpandSvg from "public/icons/expand.svg";

// Components
import Image, { ImageProps } from "@/shared/ui/Image";
import Checkbox, { CheckboxProps } from "@/shared/ui/Checkbox";
import CollectionStatus, { CollectionStatusProps } from "../CollectionStatus";
import ImagePreview, { ImagePreviewProps } from "@/shared/ui/ImagePreview";

// Re export types
export type { ImageProps };

export const Wrap = styled.div`
  position: relative;
`;

export const StyledImagePreview = styled(ImagePreview)<ImagePreviewProps>``;

export const Overlay = styled.label`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    position: absolute;
    border-radius: ${theme.radius.xss};
  `};
`;

export const OverlayCheckboxWrap = styled(Overlay)`
  left: 2px;
  top: 2px;
  padding: 5px 8px;
`;

export const OverlayStatusWrap = styled(Overlay)`
  right: 12px;
  top: 12px;
  padding: 4px 8px;
`;

export const OverlayFullScreenWrap = styled(Overlay)`
  right: 12px;
  bottom: 12px;
  width: 32px;
  height: 32px;
`;

export const StyledCheckbox = styled(Checkbox).attrs(
  () => ({})
)<CheckboxProps>``;

export const StyledCollectionStatus = styled(
  CollectionStatus
)<CollectionStatusProps>`
  ${({ theme }) => css`
    color: ${theme.color.text};
  `};
`;

export const StyledImage = styled(Image)<ImageProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    img {
      border-radius: ${theme.radius.xss};
    }
  `};
`;

// Styled icons
export const ExpandIcon = styled(ExpandSvg)`
  width: 24px;
  height: 24px;
  ${({ theme }) => css`
    color: ${theme.color.text};
  `};
`;
