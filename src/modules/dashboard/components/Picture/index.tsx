// Styles
import { StyledImage, ImageProps } from "./styles";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface PictureProps
  extends ImageProps,
    Omit<Partial<TCollectionImage>, "id" | "src"> {}

export const Picture = ({ ...props }: PictureProps) => {
  return <StyledImage {...props} />;
};

export default Picture;
