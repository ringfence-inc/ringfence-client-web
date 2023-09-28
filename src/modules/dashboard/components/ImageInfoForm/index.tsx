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
  InfoItemProps,
  InfoTableProps,
} from "./styles";

// Types
import type { TCollectionImage } from "../../api/apiGetCollectionImages";
export interface ImageInfoFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  data?: Partial<TCollectionImage>;
}

export const ImageInfoForm = ({ data = {}, ...props }: ImageInfoFormProps) => {
  const { name = "IMAGE NAME", src } = data;

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
        <Title>{name}</Title>
      </TopWrap>
      <SubWrap>
        <Image src={src} alt={`image ${name}`} />
        <RightWrap>
          <InfoTable items={tableItems} />
        </RightWrap>
      </SubWrap>
    </FormWrap>
  );
};

export default ImageInfoForm;
