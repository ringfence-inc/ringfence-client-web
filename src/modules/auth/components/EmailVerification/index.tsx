import React, { useEffect, HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, Title, SubTitle, Alert } from "./styles";

// Hooks
import { useRouter } from "next/navigation";
import { useAppRouterState } from "@/shared/hooks/useAppRouterState";

// Api
import rest from "@/shared/api";
import { queryCache } from "@/shared/libs/query";

// Types
export interface EmailVerificationProps
  extends HtmlHTMLAttributes<HTMLFormElement> {}

export const EmailVerification = ({ ...props }: EmailVerificationProps) => {
  const router = useRouter();
  const [query] = useAppRouterState({
    key: ["accessToken", "refreshToken", "error"],
  });

  const { accessToken, refreshToken, error } = query || ({} as any);

  useEffect(() => {
    if (accessToken && refreshToken) {
      rest.setTokens({ token: accessToken, refreshToken });
      queryCache.clear();
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  }, [accessToken, refreshToken, error]);

  const isSuccess = !!accessToken && !!refreshToken;
  const isError = !!error;

  const messageType = isError ? "error" : isSuccess ? "success" : undefined;
  const message = isError
    ? error || "Something went wrong, please try again later"
    : isSuccess
    ? "Your email has been successfully verified"
    : "No information was found to activate your account, please make sure that you follow the link that was received at the specified e-mail address.";

  return (
    <Wrap {...props}>
      <Title>EMAIL VERIFICATION</Title>
      <SubTitle></SubTitle>
      <Alert type={messageType} message={message} />
    </Wrap>
  );
};

export default EmailVerification;
