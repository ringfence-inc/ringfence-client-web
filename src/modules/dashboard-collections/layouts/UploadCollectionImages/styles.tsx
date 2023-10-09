import styled, { css } from "styled-components";

// Components
import _UploadImagesForm, {
  UploadImagesFormProps,
} from "../../components/UploadImagesForm";

// Re export types
export type { UploadImagesFormProps };

// Styles components
export const Wrap = styled.div`
  width: 100%;
`;

export const SubWrap = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const UploadImagesForm = styled(
  _UploadImagesForm
)<UploadImagesFormProps>``;
