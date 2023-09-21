import styled, { css } from "styled-components";

// Components
import Table, {
  TableProps,
  ColumnGroupType,
  ColumnProps,
  ColumnType,
  ColumnsType,
  TablePaginationConfig,
} from "antd/lib/table";

// Re export types
export type {
  TableProps as AntdTableProps,
  ColumnGroupType,
  ColumnProps,
  ColumnType,
  ColumnsType,
  TablePaginationConfig,
};

// Components
export const StyledTable = styled(Table)<TableProps<any>>``;
