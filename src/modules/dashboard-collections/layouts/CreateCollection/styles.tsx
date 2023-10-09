import styled, { css } from "styled-components";

// Components
import _CollectionForm, {
  CollectionFormProps,
} from "../../components/CollectionForm";

// Re export types
export type { CollectionFormProps };

// Styles components
export const Wrap = styled.div``;

export const SubWrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const CollectionForm = styled(_CollectionForm)<CollectionFormProps>``;
