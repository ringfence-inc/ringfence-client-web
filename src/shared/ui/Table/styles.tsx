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

// Types
export interface StyledTableProps extends TableProps<any> {
  $rowHeight?: number;
  $pageSize?: number;
  $baseHeight?: number;
}

// Styled css

export const selectedRowCss = css`
  ${({ theme }) => css`
    td {
      background: rgba(74, 220, 140, 0.1) !important;
      border: 1px solid ${theme.color.midGrey} !important;
      border-color: ${theme.color.primary} !important;
      border-style: solid none solid none !important;

      &:last-child {
        border-top-right-radius: ${theme.radius.xss};
        border-bottom-right-radius: ${theme.radius.xss};
        border-right-style: solid !important;
      }
      &:first-child {
        border-top-left-radius: ${theme.radius.xss};
        border-bottom-left-radius: ${theme.radius.xss};
        border-left-style: solid !important;
      }
    }
  `};
`;

// Components
export const StyledTable = styled(Table)<StyledTableProps>`
  ${({ theme, $rowHeight, $pageSize, $baseHeight = 0 }) => css`
    .ant-table,
    .ant-table-cell,
    .ant-table-placeholder {
      background: transparent !important;
    }

    .ant-table {
      ${$rowHeight &&
      $pageSize &&
      css`
        min-height: ${$rowHeight * $pageSize + $baseHeight}px;
      `};
    }

    .ant-table-row {
      td {
        border-color: transparent;
      }
      &:hover {
        ${selectedRowCss};
      }
    }

    .ant-table-row-selected {
      ${selectedRowCss};
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
