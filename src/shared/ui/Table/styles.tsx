import styled, { css } from "styled-components";

// Components
import Table, { TableProps } from "antd/lib/table";

// Re export types
export type { TableProps as AntdTableProps };

// Components
export const StyledTable = styled(Table)<TableProps<any>>``;
