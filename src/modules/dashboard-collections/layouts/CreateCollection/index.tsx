import { HtmlHTMLAttributes, useEffect } from "react";

// Styles
import { Wrap, SubWrap, CollectionForm, CollectionFormProps } from "./styles";

// Hooks
import useCreateCollectionForm from "../../hooks/useCreateCollectionForm";

// Types
import type { UseCollectionsTableReturn } from "../../hooks/useCollectionsTable";
export interface CreateCollectionProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  table?: UseCollectionsTableReturn;
  show?: boolean;
  setShow?: (show: boolean) => void;
}

export const CreateCollection = ({
  table,
  show = false,
  setShow = () => {},
  ...props
}: CreateCollectionProps) => {
  const formProps = useCreateCollectionForm();
  const { form } = formProps || {};
  const { reset } = form || {};

  const handleClose = () => setShow(false);

  useEffect(() => {
    reset();
  }, [show]);

  return (
    <Wrap {...props}>
      {show && (
        <SubWrap>
          <CollectionForm onClose={handleClose} {...formProps} />
        </SubWrap>
      )}
    </Wrap>
  );
};

export default CreateCollection;
