import styled, { css } from "styled-components";

// Components
import { InputHookForm, InputHookFormProps } from "../Input";
import { Button, ButtonProps } from "../Button";

// Styled components
export const StyledInput = styled(InputHookForm)<InputHookFormProps>`
  height: 68px;
`;

export const SubmitButton = styled(Button).attrs(() => ({
  type: "primary",
}))<ButtonProps>`
  max-width: 132px;
  width: 100%;
  &&& {
    height: 64px;
    ${({ theme }) => css`
      color: ${theme.color.black};
      font-weight: ${theme.weight.bold};
    `};
  }
`;

export const Wrap = styled.form`
  max-width: 486px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
