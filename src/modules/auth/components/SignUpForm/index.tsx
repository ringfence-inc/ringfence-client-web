import { HtmlHTMLAttributes } from "react";

// Styles
import {
  Input,
  InputsWrap,
  LinkPrimary,
  SubTitle,
  SubmitButton,
  Title,
  Wrap,
} from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";
import { MutationAlert } from "../MutationAlert";

// Types
import type { UseMutationResult } from "@tanstack/react-query";
export interface SignUpFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  mutation: UseMutationResult<any, any, any, any>;
  signInLink?: string;
  onLinkClick?: () => void;
}

export const SignUpForm = ({
  form,
  mutation,
  signInLink = "/auth/sign-in",
  onSubmit,
  onLinkClick,
  ...props
}: SignUpFormProps) => {
  const { isLoading } = mutation || {};

  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <Title>CREATE AN ACCOUNT</Title>
        <SubTitle>
          Already have an account?
          <LinkPrimary
            onClick={onLinkClick}
            href={signInLink}
            disabled={isLoading}
          >
            Login
          </LinkPrimary>
        </SubTitle>
        <InputsWrap>
          <Input
            name="email"
            placeholder="Email address"
            disabled={isLoading}
          />
          <Input
            name="nick_name"
            placeholder="Nick name"
            disabled={isLoading}
          />
          <Input
            name="password"
            placeholder="Password (at least 6 characters)"
            disabled={isLoading}
            inputType="password"
          />
          <Input
            name="confirmPassword"
            placeholder="Confirm password"
            disabled={isLoading}
            inputType="password"
          />

          <SubmitButton loading={isLoading}>Sign Up</SubmitButton>
          <MutationAlert
            successMessage="A registration confirmation email has been sent to the email address provided"
            mutation={mutation}
          />
        </InputsWrap>
        {/* <OrText>or</OrText> */}
      </Wrap>
    </FormProvider>
  );
};

export default SignUpForm;
