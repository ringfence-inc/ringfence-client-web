import React, { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  InputsWrap,
  Title,
  SubTitle,
  Input,
  SubmitButton,
} from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";

// Types
export interface NewPasswordFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  onSubmit: () => void;
}

export const SetNewPasswordForm = ({
  form,
  onSubmit,
  ...props
}: NewPasswordFormProps) => {
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>Set your new password</Title>
        <SubTitle>
          Enter your new password and confirm it to set up a new password.
        </SubTitle>
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
