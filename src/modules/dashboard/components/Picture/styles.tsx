import styled, { css } from "styled-components";

// Components
import Image, { ImageProps } from "@/shared/ui/Image";

// Re export types
export type { ImageProps };

export const StyledImage = styled(Image)<ImageProps>`
  ${({ theme }) => css`
    img {
      border-radius: ${theme.radius.xss};
    }
  `};
`;
