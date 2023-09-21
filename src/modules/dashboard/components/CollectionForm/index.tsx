// Styles
import {
  FormWrap,
  Title,
  Input,
  Select,
  TextArea,
  Description,
  DullDescription,
  DimensionsWrap,
  DimensionsSubWrap,
  SubmitWrap,
  SubmitButtonsWrap,
  SubmitButton,
  CloseButton,
  PriceWrap,
  PriceTitle,
  PriceText,
  FormWrapProps,
} from "./styles";

// Components
import { FormProvider } from "react-hook-form";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";

// Types
export interface CollectionFormProps extends FormWrapProps {
  form: UseFormReturn<any>;
  mutation: UseMutationResult<any, any, any, any>;
  showClose?: boolean;
  onClose?: () => void;
}

export const CollectionForm = ({
  showClose = true,
  onClose,
  ...props
}: CollectionFormProps) => {
  const { form, mutation } = props;
  const { isLoading } = mutation || {};

  return (
    <FormProvider {...form}>
      <FormWrap {...props}>
        <Title>CREATE A COLLECTION</Title>
        <Select
          label="Collection name"
          name="name"
          placeholder="Collection name"
          disabled={isLoading}
          options={[{ label: "Midjourney", value: "test" }]}
        />

        <DimensionsWrap>
          <Description>Image dimensions</Description>
          <DimensionsSubWrap>
            <Input
              label="Width"
              name="width"
              placeholder="Width"
              disabled={isLoading}
            />
            <Input
              label="Height"
              name="height"
              placeholder="Height"
              disabled={isLoading}
            />
          </DimensionsSubWrap>
          <DullDescription>
            Short explainer of image resolution options
          </DullDescription>
        </DimensionsWrap>
        <TextArea
          label="Prompt"
          name="prompt"
          placeholder="Prompt"
          disabled={isLoading}
        />

        <SubmitWrap>
          <PriceWrap>
            <PriceTitle>Price:&nbsp;</PriceTitle>
            <PriceText>Free</PriceText>
          </PriceWrap>
          <SubmitButtonsWrap>
            {showClose && <CloseButton onClick={onClose}>Cancel</CloseButton>}
            <SubmitButton>Run engine</SubmitButton>
          </SubmitButtonsWrap>
        </SubmitWrap>
      </FormWrap>
    </FormProvider>
  );
};

export default CollectionForm;
