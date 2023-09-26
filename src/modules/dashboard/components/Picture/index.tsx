import { useState } from "react";

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
  const { thumbnail, src } = data || {};
  return (
    <Wrap {...props}>
      {showOverlay && (
        <>
          <OverlayCheckboxWrap>
            <StyledCheckbox />
          </OverlayCheckboxWrap>
          <OverlayStatusWrap>
            <StyledCollectionStatus data={data as TCollectionImage} />
          </OverlayStatusWrap>
        </>
      )}

      <StyledImage src={thumbnail} />

      {showOverlay && (
        <>
          <OverlayFullScreenWrap>
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
