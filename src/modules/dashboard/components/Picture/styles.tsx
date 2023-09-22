import styled, { css } from "styled-components";

// Components
import Image, { ImageProps } from "@/shared/ui/Image";

// Re export types
export type { ImageProps };

export const Wrap = styled.div`
  position: relative;
`;

export const StyledImage = styled(Image)<ImageProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    img {
      border-radius: ${theme.radius.xss};
    }
  `};
`;
