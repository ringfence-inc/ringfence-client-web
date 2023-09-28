import styled, { css } from "styled-components";

// Styles
import primaryColorHover from "@/shared/styles/primaryColorHover";

// Icons
import ExpandSvg from "public/icons/expand.svg";

// Components
import Image, { ImageProps } from "@/shared/ui/Image";
import Checkbox, { CheckboxProps } from "@/shared/ui/Checkbox";
import CollectionStatus, { CollectionStatusProps } from "../CollectionStatus";
import ImagePreview, { ImagePreviewProps } from "@/shared/ui/ImagePreview";

// Keyframes
import fadeIn from "@/shared/keyframes/fadeIn";

// Re export types
export type { ImageProps };

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
  padding: 8px;
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
  ${({ theme }) => css`
    color: ${theme.color.text};
  `};
  ${primaryColorHover};
`;

export const StyledCheckbox = styled(Checkbox).attrs(() => ({
  size: "large",
}))<CheckboxProps>`
  ${({ theme }) => css`
    .ant-checkbox-inner {
      border: 2px solid ${theme.color.white} !important;
      background-color: transparent !important;
      &::after {
        width: 9px;
        height: 12px;
      }
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      border: 2px solid ${theme.color.primary} !important;
      &::after {
        border-color: ${theme.color.primary};
      }
    }
  `};
`;

export const StyledCollectionStatus = styled(
  CollectionStatus
)<CollectionStatusProps>``;

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
`;

export const Wrap = styled.div`
  position: relative;

  ${({ theme }) => css`
    border-radius: ${theme.radius.xs};
    transition: border-color 0.3s ease-in-out;

    &[data-disabled="false"] {
      cursor: pointer;

      &:hover {
        border: 2px solid ${theme.color.primary};
      }
    }

    &[data-selected="true"] {
      border: 2px solid ${theme.color.primary};
    }

    &[data-stash-actions="true"] {
      ${OverlayCheckboxWrap} {
        display: none;
      }

      ${OverlayFullScreenWrap} {
        display: none;
      }

      &:hover {
        ${OverlayCheckboxWrap} {
          display: flex;
          animation: ${fadeIn} 0.3s ease-in-out;
        }

        ${OverlayFullScreenWrap} {
          display: flex;
          animation: ${fadeIn} 0.3s ease-in-out;
        }
      }
    }
  `};
`;
