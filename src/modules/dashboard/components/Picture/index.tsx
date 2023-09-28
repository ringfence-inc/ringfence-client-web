import { useState, SyntheticEvent } from "react";

// Styles
import {
  Wrap,
  StyledImage,
  ExpandIcon,
  OverlayCheckboxWrap,
  OverlayFullScreenWrap,
  OverlayStatusWrap,
  StyledCheckbox,
  StyledCollectionStatus,
  StyledImagePreview,
  ImageProps,
} from "./styles";

// Components
import ImageInfoModal, { ImageInfoModalProps } from "../ImageInfoModal";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface PictureProps extends ImageProps {
  data?: Partial<TCollectionImage>;
  showOverlay?: boolean;
  stashActions?: boolean;
  disabled?: boolean;
  selected?: boolean;
  onImageClick?: (e: any) => void;
  onCheckboxClick?: (e: any) => void;
  onPreviewClick?: (e: any) => void;
}

export const Picture = ({
  data = {},
  showOverlay = false,
  stashActions = true,
  disabled = false,
  selected = false,
  onClick,
  onImageClick,
  onCheckboxClick,
  onPreviewClick,
  ...props
}: PictureProps) => {
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/placeholder-image.jpg";
    e.currentTarget.srcset = "";
  };
  const handleLoad = () => {
    if (showOverlay) {
      setOverlayVisible(true);
    }
  };

  const { thumbnail, src } = data || {};

  const handleImageClick = (e: any) => {
    if (disabled) return;
    setShowInfoModal(true);
    onImageClick?.(e);
  };

  const handleCancel = (e: any) => {
    setShowInfoModal(false);
  };

  const handlePreviewClick = (e: any) => {
    setShowPreview(true);
    onPreviewClick?.(e);
  };

  return (
    <>
      <Wrap
        data-stash-actions={stashActions}
        data-disabled={disabled}
        data-selected={selected}
        {...props}
      >
        {overlayVisible && (
          <>
            <OverlayCheckboxWrap onClick={onCheckboxClick}>
              <StyledCheckbox />
            </OverlayCheckboxWrap>
            <OverlayStatusWrap>
              <StyledCollectionStatus data={data as TCollectionImage} />
            </OverlayStatusWrap>
          </>
        )}

        <StyledImage
          src={thumbnail}
          onError={handleError}
          onLoadingComplete={handleLoad}
          onClick={handleImageClick}
        />

        {overlayVisible && (
          <>
            <OverlayFullScreenWrap onClick={handlePreviewClick}>
              <ExpandIcon />
            </OverlayFullScreenWrap>
            <StyledImagePreview
              src={src}
              visible={showPreview}
              setVisible={setShowPreview}
            />
          </>
        )}
      </Wrap>
      <ImageInfoModal
        data={data}
        open={showInfoModal}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Picture;
