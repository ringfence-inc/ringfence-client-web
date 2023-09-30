import styled, { css } from "styled-components";

// Components
import Empty, { EmptyProps } from "antd/lib/empty";

// Re export types
export type { EmptyProps as AntdEmptyProps };

// Styled components
export const StyledEmpty = styled(Empty)<EmptyProps>``;
