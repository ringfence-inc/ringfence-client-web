import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, Picture } from "./styles";

// Types
import type { GetImagesImage } from "../../api/apiGetImages";
import type { CollectionImage } from "../../api/apiGetCollectionImages";
export interface PicturesGridProps extends HtmlHTMLAttributes<HTMLDivElement> {
  items?: Array<GetImagesImage>;
}

export const PicturesGrid = ({ items = [], ...props }: PicturesGridProps) => {
  return (
    <Wrap {...props}>
      {items.map((item) => {
        const { id, src } = item;
        return <Picture key={id} src={src} />;
      })}
    </Wrap>
  );
};

export default PicturesGrid;
