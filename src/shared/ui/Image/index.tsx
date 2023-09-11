import React, { useMemo, forwardRef } from 'react';
import { ImageWrapper } from './styles';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends Partial<NextImageProps> {
  path?: string;
  dir?: string;
  name?: string;
  ext?: string;
  fullPath?: string;

  activeDir?: string;
  activeName?: string;
  activePath?: string;
  activeExt?: string;
  fullActivePath?: string;

  active?: boolean;
}

export const Image = React.memo(
  forwardRef<any, ImageProps>(
    (
      {
        width,
        height,
        className = '',
        fill = true,

        path = '',
        dir = '/images',
        name = '',

        ext = '',
        fullPath = `${path ? path : `${dir}/${name}${ext}`}`,
        src = '',

        activeDir = dir,
        activeName = '',
        activePath = '',
        activeExt = '',
        fullActivePath = `${
          activePath ? activePath : `${activeDir}/${activeName}${activeExt}`
        }`,

        active = false,
        alt = '',
        ...props
      },
      ref
    ) => {
      const [sizeProps, _fill] = useMemo(() => {
        if (typeof width === 'number' && typeof height === 'number') {
          return [
            {
              width,
              height,
            },
            false,
          ];
        }

        if (fill) {
          return [{}, true];
        }

        return [{ width, height }, false];
      }, [width, height, fill]);

      const activeSrc = activeName || activePath ? fullActivePath : '';

      return (
        <ImageWrapper $fill={_fill} className={className} ref={ref}>
          <NextImage
            src={active ? activeSrc : src || fullPath}
            alt={alt || name}
            fill={_fill}
            {...sizeProps}
            {...props}
          />
          {props.children}
        </ImageWrapper>
      );
    }
  )
);

export default Image;
