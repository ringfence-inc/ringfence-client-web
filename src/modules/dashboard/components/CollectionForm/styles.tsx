import styled, { css } from "styled-components";

// Components
import _Input, { InputProps } from "../Input";
import _Select, { SelectProps } from "../Select";
import _TextArea, { TextAreaProps } from "../TextArea";
import _SubmitButton, { SubmitButtonProps } from "../SubmitButton";
import _CloseButton, { CloseButtonProps } from "../CloseButton";
import Typography from "@/shared/ui/Typography";

// Re export types
export type { InputProps, TextAreaProps, SubmitButtonProps };

// Styled components
export const FormWrap = styled.form`
  max-width: 558px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Input = styled(_Input)<InputProps>`
  width: 100%;
`;
export const TextArea = styled(_TextArea)<TextAreaProps>`
  width: 100%;
`;
export const Title = styled(Typography.H1)`
  margin-bottom: 40px;
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

export const SubmitButton = styled(_SubmitButton)<SubmitButtonProps>``;
