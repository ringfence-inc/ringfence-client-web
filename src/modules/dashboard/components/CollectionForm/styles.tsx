import styled, { css } from "styled-components";

// Components
import _FormWrap, { FormWrapProps } from "../FormWrap";
import _Input, { InputProps } from "../Input";
import _Select, { SelectProps } from "../Select";
import _TextArea, { TextAreaProps } from "../TextArea";
import _SubmitButton, { SubmitButtonProps } from "../SubmitButton";
import _CloseButton, { CloseButtonProps } from "../CloseButton";
import Typography from "@/shared/ui/Typography";

// Re export types
export type { FormWrapProps, InputProps, TextAreaProps, SubmitButtonProps };

// Styled components
export const FormWrap = styled(_FormWrap)<FormWrapProps>``;
export const Input = styled(_Input)<InputProps>`
  width: 100%;
`;
export const TextArea = styled(_TextArea)<TextAreaProps>`
  width: 100%;
`;
export const Select = styled(_Select)<SelectProps>`
  width: 100%;
`;

export const Title = styled(Typography.H1)`
  margin-bottom: 40px;
`;

export const Description = styled(Typography.SmallP)`
  margin-bottom: 20px;
`;

export const DullDescription = styled(Typography.SmallP)`
  margin-top: 20px;
  ${({ theme }) => css`
    color: ${theme.color.grey};
  `};
`;

export const CloseButton = styled(_CloseButton)<CloseButtonProps>``;

export const SubmitWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
`;

export const SubmitButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceTitle = styled(Typography.SmallText)``;

export const PriceText = styled(Typography.SmallText)`
  ${({ theme }) => css`
    color: ${theme.color.primary};
  `};
`;

export const DimensionsWrap = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const DimensionsSubWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

export const SubmitButton = styled(_SubmitButton)<SubmitButtonProps>``;
