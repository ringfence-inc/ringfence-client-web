import styled, { css } from "styled-components";

// Styled components
export const FormWrap = styled.form`
  max-width: 528px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    border-radius: ${theme.radius.xs};
  `};
`;

export const InputsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

export default FormWrap;
