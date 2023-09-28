import { SyntheticEvent } from "react";

// Styles
import { StyledImage, ImageProps } from "./styles";

// Types
export interface CollectionThumbnailProps extends ImageProps {}

export const CollectionThumbnail = ({ ...props }: CollectionThumbnailProps) => {
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/placeholder-image.jpg";
    e.currentTarget.srcset = "";
  };

  return <StyledImage onError={handleError} {...props} />;
};

export default CollectionThumbnail;
