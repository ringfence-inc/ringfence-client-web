import styled, { css } from "styled-components";

// Components
import Checkbox, { CheckboxProps } from "antd/lib/checkbox";

// Re export types
export type { CheckboxProps as AntdCheckboxProps };

// Styled components
export const StyledCheckbox = styled(Checkbox)<CheckboxProps>``;
