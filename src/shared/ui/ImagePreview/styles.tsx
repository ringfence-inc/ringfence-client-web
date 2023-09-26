import styled, { css } from "styled-components";

// Components
import Image, { ImageProps } from "antd/lib/image";

// Re export types
export type { ImageProps as AntdImageProps };

// Styled components
export const Wrap = styled.div`
  position: absolute;
  display: none;
`;
export const StyledImage = styled(Image)``;
