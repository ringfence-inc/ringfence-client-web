import styled, { css } from "styled-components";

// Styles
import primaryColorHover from "../../styles/primaryColorHover";

// Icons
import ExpandSvg from "public/icons/expand.svg";

// Components
import Image, { ImageProps } from "../Image";
import BorderedCheckbox, {
  BorderedCheckboxProps,
} from "../BorderedCheckbox";
import CollectionStatus, { CollectionStatusProps } from "../../../modules/dashboard-collections/components/CollectionStatus";
import ImagePreview, { ImagePreviewProps } from "../ImagePreview";

// Keyframes
import fadeIn from "../../keyframes/fadeIn";

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
  left: 0;
  top: 0;
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

export const StyledCheckbox = styled(BorderedCheckbox).attrs(() => ({
  size: "large",
}))<BorderedCheckboxProps>``;

export const StyledCollectionStatus = styled(
  CollectionStatus
)<CollectionStatusProps>``;

export const StyledImage = styled(Image)<ImageProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
      height: 100% !important;
      border-radius: ${theme.radius.xss};
    }
  `};
`;

// Styled icons
export const ExpandIcon = styled(ExpandSvg)`
  width: 24px;
  height: 24px;
`;

// Styled css
export const actionsVisibleCss = css`
  ${OverlayCheckboxWrap} {
    display: flex;
    animation: ${fadeIn} 0.3s ease-in-out;
  }

  ${OverlayFullScreenWrap} {
    display: flex;
    animation: ${fadeIn} 0.3s ease-in-out;
  }
`;

export const Wrap = styled.div`
  position: relative;

  ${({ theme }) => css`
    border: 2px solid transparent;
    border-radius: ${theme.radius.xss};
    transition: border-color 0.3s ease-in-out;

    &[data-disabled="false"] {
      cursor: pointer;
    }

    &[data-stash-actions="true"] {
      ${OverlayCheckboxWrap} {
        display: none;
      }

      ${OverlayFullScreenWrap} {
        display: none;
      }

      &:hover {
        ${actionsVisibleCss};
      }
    }

    &[data-selected="true"] {
      border: 2px solid ${theme.color.primary};
      ${actionsVisibleCss};
      ${OverlayCheckboxWrap} {
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  `};
`;
