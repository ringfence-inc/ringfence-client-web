import styled, { css } from "styled-components";

// Styles
import { selectSizeCss } from "@/shared/styles/sizes";

// Components
import Select, { SelectProps } from "antd/lib/select";

// Re export types
export type { SelectProps as AntdSelectProps };

// Styled components
export const StyledSelect = styled(Select)<SelectProps>`
  ${selectSizeCss}
  .ant-select-selector {
    height: inherit !important;
    display: flex;
    align-items: center;
  }

  .ant-select-selection-search,
  .ant-select-selection-placeholder {
    height: min-content;
  }
`;
