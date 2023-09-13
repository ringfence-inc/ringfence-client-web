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
export interface RecoveryPasswordFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  signInLink?: string;
  onLinkClick?: () => void;
}

export const RecoveryPasswordForm = ({
  form,
  onSubmit,
  ...props
}: RecoveryPasswordFormProps) => {
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>PASSWORD RECOVERY</Title>
        <SubTitle>
          Enter your email and we will send you a link to reset your password.
        </SubTitle>
        <InputsWrap>
          <Input name="email" placeholder="Email address" />
          <SubmitButton>Reset password</SubmitButton>
        </InputsWrap>
      </Wrap>
    </FormProvider>
  );
};

export default RecoveryPasswordForm;
