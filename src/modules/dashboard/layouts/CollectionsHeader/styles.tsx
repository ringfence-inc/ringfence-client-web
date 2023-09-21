import styled, { css } from "styled-components";

// Components
import _NewCollectionButton, {
  NewCollectionButtonProps,
} from "./components/NewCollectionButton";

// Re export types
export type { NewCollectionButtonProps };

// Styled components
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewCollectionButton = styled(
  _NewCollectionButton
)<NewCollectionButtonProps>``;
