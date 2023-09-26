import styled, { css } from "styled-components";

// Styles
import { checkboxSizeCss, SizeProps } from "@/shared/styles/sizes";

// Components
import Checkbox, { CheckboxProps } from "antd/lib/checkbox";

// Re export types
export type { CheckboxProps as AntdCheckboxProps };

// Styled components
export const StyledCheckbox = styled(Checkbox)<CheckboxProps & SizeProps>`
  ${checkboxSizeCss};

  .ant-checkbox,
  .ant-checkbox-inner {
    width: inherit;
    height: inherit;
  }
`;
