import styled, { css } from "styled-components";

// Components
import _Picture, { PictureProps } from "../../components/Picture";

// Styled components
export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const Picture = styled(_Picture)<PictureProps>``;