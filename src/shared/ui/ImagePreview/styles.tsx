import styled, { css } from "styled-components";

// Components
import Image, { ImageProps } from "antd/lib/image";

// Re export types
export type { ImageProps as AntdImageProps };

// Styled components
export const StyledImage = styled(Image)`
  display: none;
`;
