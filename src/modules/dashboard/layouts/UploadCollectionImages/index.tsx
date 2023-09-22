import { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  SubWrap,
  UploadImagesForm,
  UploadImagesFormProps,
} from "./styles";

// Hooks
import useUploadCollectionImagesForm from "../../hooks/useUploadCollectionImagesForm";

export interface UploadCollectionImagesProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  collectionId: number;
  show?: boolean;
  showClose?: boolean;
  setShow?: (show: boolean) => void;
}

export const UploadCollectionImages = ({
  collectionId,
  show = false,
  showClose = false,
  setShow = () => {},
  ...props
}: UploadCollectionImagesProps) => {
  const formProps = useUploadCollectionImagesForm({ collectionId });

  const handleClose = () => setShow(false);

  return (
    <Wrap {...props}>
      {show && (
        <SubWrap>
          <UploadImagesForm
            onClose={handleClose}
            showClose={showClose}
            {...formProps}
          />
        </SubWrap>
      )}
    </Wrap>
  );
};

export default UploadCollectionImages;
