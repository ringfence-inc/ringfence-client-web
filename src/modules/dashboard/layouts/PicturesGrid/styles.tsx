import styled, { css } from "styled-components";

// Components
import _Picture, { PictureProps } from "../../components/Picture";
import _Empty, { EmptyProps } from "@/shared/ui/Empty";
import _Spin, { SpinProps } from "@/shared/ui/Spin";

// Re export types
export type { PictureProps, EmptyProps };

// Styled components
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const Picture = styled(_Picture)<PictureProps>``;

export const Empty = styled(_Empty)<EmptyProps>``;

export const Spin = styled(_Spin).attrs(() => ({
  size: "large",
}))<SpinProps>``;
