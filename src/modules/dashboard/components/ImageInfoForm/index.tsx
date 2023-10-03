import { HtmlHTMLAttributes, useMemo } from "react";

// Styles
import {
  TopWrap,
  FormWrap,
  SubWrap,
  Title,
  RightWrap,
  InfoItem,
  InfoTable,
  Image,
  DeleteButton,
  InfoItemProps,
  InfoTableProps,
} from "./styles";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface ImageInfoFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  data?: Partial<TCollectionImage>;
  collectionId?: number;
  onDeleteClick?: (...args: any[]) => void;
  loading?: boolean;
}

export const ImageInfoForm = ({
  data = {},
  collectionId,
  loading,
  onDeleteClick,
  ...props
}: ImageInfoFormProps) => {
  const { title = "IMAGE NAME", s3_url } = data;

  const tableItems = useMemo(
    () => [
      {
        label: "Type of generation",
        value: "Blend",
      },
      {
        label: "Engine",
        value: "Midjourney",
      },
      {
        label: "Image resolution",
        value: "640 x 640px",
      },
    ],
    []
  );

  return (
    <FormWrap {...props}>
      <TopWrap>
        <Title>{title}</Title>
      </TopWrap>
      <SubWrap>
        <Image src={s3_url} alt={`image - ${title}`} />
        <RightWrap>
          <InfoTable items={tableItems} />
          <InfoItem
            label="Prompt"
            value="A dystopian landscape showing a close up glowing jar of honey, with a man standing in front."
          />
          <DeleteButton onClick={onDeleteClick} loading={loading}>
            Delete Image
          </DeleteButton>
        </RightWrap>
      </SubWrap>
    </FormWrap>
  );
};

export default ImageInfoForm;
