import { HtmlHTMLAttributes } from "react";

// Styles
import {
  FormWrap,
  StyledDragger,
  SubmitWrap,
  SubmitButton,
  CloseButton,
} from "./styles";

// Components
import { FormProvider } from "react-hook-form";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";

export interface UploadImagesFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  mutation: UseMutationResult<any, any, any, any>;
  showClose?: boolean;
  onSubmit?: (data: any) => void;
  onClose?: () => void;
}

export const UploadImagesForm = ({
  showClose = true,
  onSubmit,
  onClose,
  mutation,
  form,
  ...props
}: UploadImagesFormProps) => {
  const { isLoading } = mutation || {};

  return (
    <FormProvider {...form}>
      <FormWrap onSubmit={onSubmit} {...props}>
        <StyledDragger name="images" />
        <SubmitWrap>
          <SubmitButton loading={isLoading}>Upload Images</SubmitButton>
          {showClose && (
            <CloseButton onClick={onClose} disabled={isLoading}>
              Cancel
            </CloseButton>
          )}
        </SubmitWrap>
      </FormWrap>
    </FormProvider>
  );
};

export default UploadImagesForm;
