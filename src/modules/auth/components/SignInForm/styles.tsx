import styled, { css } from "styled-components";

// Components
import FormWrap, { InputsWrap as _InputsWrap } from "../FormWrap";
import _Title from "../Title";
import _SubTitle from "../SubTitle";
import _LinkPrimary from "../LinkPrimary";
import _ForgotPasswordLink from "../ForgotPasswordLink";
import _Input from "../Input";
import _SubmitButton from "../SubmitButton";
import _OrText from "../OrText";
import _RememberMeCheckbox from "../RememberMeCheckbox";

// Styled components
export const Wrap = styled(FormWrap)``;
export const InputsWrap = styled(_InputsWrap)``;
export const Title = styled(_Title)``;
export const SubTitle = styled(_SubTitle)``;
export const LinkPrimary = styled(_LinkPrimary)``;
export const Input = styled(_Input)``;

export const ActionsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const RememberMeCheckbox = styled(_RememberMeCheckbox)``;

export const ForgotPasswordLink = styled(_ForgotPasswordLink)``;

export const SubmitButton = styled(_SubmitButton)``;
export const OrText = styled(_OrText)``;
