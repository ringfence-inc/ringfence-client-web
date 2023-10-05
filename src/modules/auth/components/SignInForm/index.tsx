import React, { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  InputsWrap,
  ActionsWrap,
  ForgotPasswordLink,
  RememberMeCheckbox,
  Title,
  SubTitle,
  LinkPrimary,
  Input,
  SubmitButton,
  OrText,
} from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";
import { MutationAlert } from "../MutationAlert";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
export interface SignInFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  mutation: UseMutationResult<any, any, any, any>;
  signUpLink?: string;
  onLinkClick?: () => void;
}

export const SignInForm = ({
  form,
  mutation,
  signUpLink = "/auth/sign-up",
  onSubmit,
  onLinkClick,
  ...props
}: SignInFormProps) => {
  const { isLoading } = mutation || {};

  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>WELCOME TO RINGFENCE</Title>
        <SubTitle>
          {`Don't have an account?`}
          <LinkPrimary
            onClick={onLinkClick}
            href={signUpLink}
            disabled={isLoading}
          >
            Sign up for free
          </LinkPrimary>
        </SubTitle>
        <InputsWrap>
          <Input
            name="email"
            placeholder="Email address"
            disabled={isLoading}
          />
          <Input
            name="password"
            placeholder="Password"
            disabled={isLoading}
            inputType="password"
          />

          <SubmitButton loading={isLoading}>Log in</SubmitButton>
          <MutationAlert
            successMessage="Successful login"
            mutation={mutation}
          />
        </InputsWrap>
        <ActionsWrap>
          <RememberMeCheckbox disabled={isLoading} />
          <ForgotPasswordLink disabled={isLoading} />
        </ActionsWrap>
        {/* <OrText>or</OrText> */}
      </Wrap>
    </FormProvider>
  );
};

export default SignInForm;
