import styled, { css } from "styled-components";

// Components
import Alert, { AlertProps } from "antd/lib/alert";

// Re export types
export type { AlertProps as AntdAlertProps };

// Styled components
export const StyledAlert = styled(Alert)<AlertProps>``;
