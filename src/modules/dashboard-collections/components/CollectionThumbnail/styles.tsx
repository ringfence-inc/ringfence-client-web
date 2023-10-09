import styled, { css } from "styled-components";

// Components
import Image, { ImageProps } from "../../../../shared/ui/Image";

// Re export types
export type { ImageProps };

// Styled components
export const StyledImage = styled(Image)<ImageProps>`
  width: 24px;
  height: 24px;
  img {
    border-radius: 2px;
  }
`;
