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
export const StyledTable = styled(Table)<TableProps<any>>`
  ${({ theme }) => css`
    .ant-table {
      background: transparent;
    }

    .ant-table-cell {
      border-color: ${theme.color.midGrey} !important;
    }

    .ant-table-thead {
      tr {
        th {
          text-transform: uppercase;
          background: transparent !important;
          color: ${theme.color.grey};
        }
      }
    }
  `};
`;
