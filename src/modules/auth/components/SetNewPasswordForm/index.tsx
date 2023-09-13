import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, InputsWrap, Title, Input, SubmitButton } from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";
import { MutationAlert } from "../MutationAlert";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
export interface SetNewPasswordFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  mutation: UseMutationResult<any, any, any, any>;
  onSubmit: () => void;
}

export const SetNewPasswordForm = ({
  form,
  mutation,
  onSubmit,
  ...props
}: SetNewPasswordFormProps) => {
  const { isLoading } = mutation || {};

  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>SET YOUR NEW PASSWORD</Title>
        <InputsWrap>
          <Input
            type="password"
            name="password"
            placeholder="New Password"
            disabled={isLoading}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            disabled={isLoading}
          />
          <SubmitButton loading={isLoading}>Set up new password</SubmitButton>
          <MutationAlert
            successMessage="Successful password change"
            mutation={mutation}
          />
        </InputsWrap>
      </Wrap>
    </FormProvider>
  );
};

export default SetNewPasswordForm;
