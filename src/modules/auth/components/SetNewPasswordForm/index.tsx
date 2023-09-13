import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, InputsWrap, Title, Input, SubmitButton } from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";

// Types
export interface SetNewPasswordFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  onSubmit: () => void;
}

export const SetNewPasswordForm = ({
  form,
  onSubmit,
  ...props
}: SetNewPasswordFormProps) => {
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>SET YOUR NEW PASSWORD</Title>
        <InputsWrap>
          <Input type="password" name="password" placeholder="New Password" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <SubmitButton>Set up new password</SubmitButton>
        </InputsWrap>
      </Wrap>
    </FormProvider>
  );
};

export default SetNewPasswordForm;
