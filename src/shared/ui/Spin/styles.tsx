import styled, { css } from "styled-components";

// Components
import Spin, { SpinProps } from "antd/lib/spin";

// Re export types
export type { SpinProps as AntdSpinProps };

// Styled components
export const StyledSpin = styled(Spin)<SpinProps>``;
