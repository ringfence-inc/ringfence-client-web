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

      .ant-table-content {
        table {
          tbody {
            tr {
              border-radius: ${theme.radius.xss};
              td {
              }
            }
          }
        }
      }
    }

    .ant-table-row {
      &:hover {
        td {
          background: rgba(74, 220, 140, 0.1) !important;
        }
      }
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
