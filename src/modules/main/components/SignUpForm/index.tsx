import React, { useState, useMemo, HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, StyledInput, SubmitButton, StyledLink } from "./styles";

// Types
export interface SignUpFormProps extends HtmlHTMLAttributes<HTMLDivElement> {}

// Hooks
import { useAppRouterCreatePath } from "@/shared/hooks/useAppRouterCreatePath";
import { EMAIL_KEY } from "@/modules/auth/hooks/useAuthModal";

export const SignUpForm = ({ ...props }: SignUpFormProps) => {
  const [email, setEmail] = useState("");
  const { createPathname } = useAppRouterCreatePath();

  const hrefParamsSuffix = useMemo(
    () =>
      createPathname({
        [EMAIL_KEY]: email,
      }),
    [email, createPathname]
  );

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Wrap {...props}>
      <StyledInput size="large" name="name" placeholder="Name" />
      <StyledInput
        onChange={handleEmailChange}
        size="large"
        name="email"
        placeholder="Email"
      />
      <StyledInput size="large" name="country" placeholder="Country" />
      <SubmitButton size="large">
        <StyledLink href={`/auth/sign-up${hrefParamsSuffix}`}>
          SIGN UP
        </StyledLink>
      </SubmitButton>
    </Wrap>
  );
};

export default SignUpForm;
