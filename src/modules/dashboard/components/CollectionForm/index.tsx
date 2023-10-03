import { HtmlHTMLAttributes } from "react";

// Styles
import {
  FormWrap,
  Title,
  Input,
  SubmitWrap,
  SubmitButtonsWrap,
  SubmitButton,
  CloseButton,
  PriceWrap,
  PriceTitle,
  PriceText,
} from "./styles";

// Components
import { FormProvider } from "react-hook-form";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";

// Types
export interface CollectionFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
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
  const {
    formState: { isSubmitting },
  } = form;

  return (
    <FormProvider {...form}>
      <FormWrap {...props}>
        <Title>CREATE A COLLECTION</Title>
        <Input
          label="Collection name"
          name="title"
          placeholder="Collection name"
          disabled={isSubmitting}
        />

        <SubmitWrap>
          <PriceWrap>
            <PriceTitle>Price:&nbsp;</PriceTitle>
            <PriceText>Free</PriceText>
          </PriceWrap>
          <SubmitButtonsWrap>
            {showClose && (
              <CloseButton onClick={onClose} disabled={isSubmitting}>
                Cancel
              </CloseButton>
            )}
            <SubmitButton loading={isSubmitting}>
              Create collection
            </SubmitButton>
          </SubmitButtonsWrap>
        </SubmitWrap>
      </FormWrap>
    </FormProvider>
  );
};

export default CollectionForm;
