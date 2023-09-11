import styled, { css } from "styled-components";

// Components
import Button, { ButtonProps } from "antd/lib/button";

// Re export types
export type { ButtonProps as AntdButtonProps };

// Styled components
export const StyledButton = styled(Button)<ButtonProps>``;
