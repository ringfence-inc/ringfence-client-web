import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, Picture, PictureProps } from "./styles";

// Types
import type { GetImagesImage } from "../../api/apiGetImages";
import type { TCollectionImage } from "../../api/apiGetCollectionImages";

export interface PicturesGridProps extends HtmlHTMLAttributes<HTMLDivElement> {
  items?: Array<GetImagesImage | TCollectionImage>;
  pictureProps?: Partial<PictureProps>;
}

export const PicturesGrid = ({
  items = [],
  pictureProps,
  ...props
}: PicturesGridProps) => {
  return (
    <Wrap {...props}>
      {items.map((item, index) => {
        return (
          <Picture
            key={item?.id || index}
            data={item}
            {...((pictureProps as any) || {})}
          />
        );
      })}
    </Wrap>
  );
};

export default PicturesGrid;
