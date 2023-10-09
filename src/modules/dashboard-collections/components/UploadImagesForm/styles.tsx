import styled, { css } from "styled-components";

// Components
import UploadDraggerHookForm, {
  UploadDraggerHookFormProps,
} from "../../../../shared/ui/UploadDragger/plugins/UploadDraggerHookForm";
import _SubmitButton, { SubmitButtonProps } from "../../../dashboard/components/SubmitButton";
import _CloseButton, { CloseButtonProps } from "../../../dashboard/components/CloseButton";

// Re export types
export type { UploadDraggerHookFormProps };

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SubmitWrap = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const SubmitButton = styled(_SubmitButton)<SubmitButtonProps>``;

export const CloseButton = styled(_CloseButton)<CloseButtonProps>``;

export const StyledDragger = styled(UploadDraggerHookForm)`
  width: 100%;
`;
