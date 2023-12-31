// Styles
import { Wrap, StyledImage, AntdImageProps } from "./styles";

// Types
export interface ImagePreviewProps extends AntdImageProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
}

export const ImagePreview = ({
  visible,
  preview = {},
  src,
  children,
  setVisible = () => {},
  ...props
}: ImagePreviewProps) => {
  const previewProps = {
    ...((preview as object) || {}),
    src,
    visible,
    onVisibleChange: (v: boolean) => setVisible(v),
  };

  return (
    <>
      {visible && (
        <Wrap>
          <StyledImage preview={previewProps} src={src} {...props} />
        </Wrap>
      )}
      {children}
    </>
  );
};

export default ImagePreview;
