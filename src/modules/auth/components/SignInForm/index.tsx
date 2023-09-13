import React, { HtmlHTMLAttributes } from "react";

// Styles
import {
  Wrap,
  InputsWrap,
  Title,
  SubTitle,
  ChangeActionLink,
  Input,
  SubmitButton,
  OrText,
} from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";

// Types
export interface SignInFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  signUpLink?: string;
  onLinkClick?: () => void;
}

export const SignInForm = ({
  form,
  signUpLink = "/auth/sign-up",
  onSubmit,
  onLinkClick,
  ...props
}: SignInFormProps) => {
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>WELCOME TO RINGFENCE</Title>
        <SubTitle>
          {`Don't have an account?`}
          <ChangeActionLink onClick={onLinkClick} href={signUpLink}>
            Sign up for free
          </ChangeActionLink>
        </SubTitle>
        <InputsWrap>
          <Input name="email" placeholder="Email address" />
          <Input name="password" placeholder="Password" />
          <SubmitButton>LOG IN</SubmitButton>
        </InputsWrap>
        <OrText>or</OrText>
      </Wrap>
    </FormProvider>
  );
};

export default SignInForm;
