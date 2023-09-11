import styled, { css } from "styled-components";
import { HtmlHTMLAttributes } from "react";

export interface ImageWrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $fill?: boolean;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  ${({ $fill }) => css`
    ${$fill &&
    css`
      width: 100%;

      div,
      span {
        position: unset !important;
      }

      img {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
      }
    `};
  `};
`;
