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

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface PictureProps extends ImageProps {
  data?: Partial<TCollectionImage>;
  showOverlay?: boolean;
}

export const Picture = ({
  data = {},
  showOverlay = false,
  ...props
}: PictureProps) => {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);

  const handlePreviewClick = () => setShowPreview(true);
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/placeholder-image.jpg";
    e.currentTarget.srcset = "";
  };
  const handleLoad = () => {
    if (showOverlay) {
      console.log("image onload");
      setOverlayVisible(true);
    }
  };

  const { thumbnail, src } = data || {};
  return (
    <Wrap {...props}>
      {overlayVisible && (
        <>
          <OverlayCheckboxWrap>
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
  );
};

export default Picture;
