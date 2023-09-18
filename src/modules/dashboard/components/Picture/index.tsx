// Styles
import { StyledImage, ImageProps } from "./styles";

// Types
export interface PictureProps extends ImageProps {}

export const Picture = (props: PictureProps) => {
  return <StyledImage {...props} />;
};

export default Picture;
