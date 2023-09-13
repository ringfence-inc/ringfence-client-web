import React, { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  InputsWrap,
  Title,
  SubTitle,
  LinkPrimary,
  Input,
  SubmitButton,
  OrText,
} from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";

// Types
export interface SignUpFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  signInLink?: string;
  onLinkClick?: () => void;
}

export const SignUpForm = ({
  form,
  signInLink = "/auth/sign-in",
  onSubmit,
  onLinkClick,
  ...props
}: SignUpFormProps) => {
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>CREATE AN ACCOUNT</Title>
        <SubTitle>
          Already have an account?
          <LinkPrimary onClick={onLinkClick} href={signInLink}>
            Login
          </LinkPrimary>
        </SubTitle>
        <InputsWrap>
          <Input name="email" placeholder="Email address" />
          <Input
            name="password"
            placeholder="Password (at least 6 characters)"
          />
          <Input name="confirmPassword" placeholder="Confirm password" />

          <SubmitButton>LOG IN</SubmitButton>
        </InputsWrap>
        {/* <OrText>or</OrText> */}
      </Wrap>
    </FormProvider>
  );
};

export default SignUpForm;
