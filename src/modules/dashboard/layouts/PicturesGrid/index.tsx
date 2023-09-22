import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, Picture } from "./styles";

// Types
import type { GetImagesImage } from "../../api/apiGetImages";
import type { TCollectionImage } from "../../api/apiGetCollectionImages";

export interface PicturesGridProps extends HtmlHTMLAttributes<HTMLDivElement> {
  items?: Array<GetImagesImage | TCollectionImage>;
}

export const PicturesGrid = ({ items = [], ...props }: PicturesGridProps) => {
  return (
    <Wrap {...props}>
      {items.map((item) => {
        const { id, src, status } = item as any;
        return <Picture key={id} {...{ src, status }} />;
      })}
    </Wrap>
  );
};

export default PicturesGrid;
