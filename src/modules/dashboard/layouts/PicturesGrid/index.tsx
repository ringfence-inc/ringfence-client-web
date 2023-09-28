import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, Picture, PictureProps } from "./styles";

// Types
import type { GetImagesImage } from "../../api/apiGetImages";
import type { TCollectionImage } from "../../api/apiGetCollectionImages";

export interface PicturesGridProps extends HtmlHTMLAttributes<HTMLDivElement> {
  items?: Array<GetImagesImage | TCollectionImage>;
  pictureProps?: Partial<PictureProps>;
  selectedKeys?: React.Key[];
}

export const PicturesGrid = ({
  items = [],
  pictureProps,
  selectedKeys,
  ...props
}: PicturesGridProps) => {
  return (
    <Wrap {...props}>
      {items.map((item, index) => {
        const { id } = item;
        const isSelected =
          Array.isArray(selectedKeys) && selectedKeys.includes(id);

        return (
          <Picture
            key={id || index}
            data={item}
            selected={isSelected}
            {...((pictureProps as any) || {})}
          />
        );
      })}
    </Wrap>
  );
};

export default PicturesGrid;
