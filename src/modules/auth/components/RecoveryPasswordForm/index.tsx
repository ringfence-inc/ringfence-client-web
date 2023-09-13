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
import { MutationAlert } from "../MutationAlert";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
export interface RecoveryPasswordFormProps
  extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  mutation: UseMutationResult<any, any, any, any>;
  signInLink?: string;
  onLinkClick?: () => void;
}

export const RecoveryPasswordForm = ({
  form,
  mutation,
  onSubmit,
  ...props
}: RecoveryPasswordFormProps) => {
  const { isLoading } = mutation || {};

  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>PASSWORD RECOVERY</Title>
        <SubTitle>
          Enter your email and we will send you a link to reset your password.
        </SubTitle>
        <InputsWrap>
          <Input
            name="email"
            placeholder="Email address"
            disabled={isLoading}
          />
          <SubmitButton loading={isLoading}>Reset password</SubmitButton>
          <MutationAlert
            successMessage="A password recovery email has been sent. Please check your email"
            mutation={mutation}
          />
        </InputsWrap>
      </Wrap>
    </FormProvider>
  );
};

export default RecoveryPasswordForm;
