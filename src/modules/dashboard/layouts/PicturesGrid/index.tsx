import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, GridWrap, Picture, Empty, Spin, PictureProps } from "./styles";

// Types
import type { GetImagesImage } from "../../api/apiGetImages";
import type { TCollectionImage } from "../../../dashboard-collections/api/apiGetCollectionImages";

export interface PicturesGridProps extends HtmlHTMLAttributes<HTMLDivElement> {
  items?: Array<GetImagesImage | TCollectionImage>;
  pictureProps?: Partial<PictureProps>;
  selectedKeys?: React.Key[];
  loading?: boolean;
  collectionId?: number;
}

export const PicturesGrid = ({
  items = [],
  pictureProps,
  selectedKeys,
  loading = false,
  collectionId,
  ...props
}: PicturesGridProps) => {
  console.log("pictures grid items", items);
  return (
    <Wrap {...props}>
      {loading && <Spin />}
      {!loading && items.length === 0 && <Empty />}
      <GridWrap>
        {items.map((item, index) => {
          const { id } = item;
          const isSelected =
            Array.isArray(selectedKeys) &&
            selectedKeys.includes(id as React.Key);

          return (
            <Picture
              key={id || index}
              data={item}
              selected={isSelected}
              collectionId={collectionId}
              {...((pictureProps as any) || {})}
            />
          );
        })}
      </GridWrap>
    </Wrap>
  );
};

export default PicturesGrid;
