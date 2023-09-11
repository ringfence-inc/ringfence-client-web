import React, { useState, HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, StyledInput, SubmitButton } from "./styles";

// Types
export interface SignUpFormProps extends HtmlHTMLAttributes<HTMLDivElement> {}

// Hooks
import { useAuthModal } from "@/modules/auth/hooks/useAuthModal";

export const SignUpForm = ({ ...props }: SignUpFormProps) => {
  const [email, setEmail] = useState("");
  const { openSignUpModal } = useAuthModal(email);

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
      <SubmitButton onClick={openSignUpModal} size="large">
        SIGN UP
      </SubmitButton>
    </Wrap>
  );
};

export default SignUpForm;
