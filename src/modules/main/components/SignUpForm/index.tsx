import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, StyledInput, SubmitButton } from "./styles";

// Components
import { FormProvider, UseFormReturn } from "react-hook-form";

// Types
export interface SignUpFormProps extends HtmlHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
}

export const SignUpForm = ({ form, onSubmit, ...props }: SignUpFormProps) => {
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={onSubmit} {...props}>
        <StyledInput size="large" name="name" placeholder="Name" />
        <StyledInput size="large" name="email" placeholder="Email" />
        <StyledInput size="large" name="country" placeholder="Country" />
        <SubmitButton size="large">SIGN UP</SubmitButton>
      </Wrap>
    </FormProvider>
  );
};

export default SignUpForm;
