import styled, { css } from "styled-components";

// Styles
import {
  borderedCheckboxCss,
  borderedCheckboxMiddleCss,
} from "../BorderedCheckbox/styles";

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
      background: #07160e !important;
      border: 1px solid ${theme.color.midGrey} !important;
      border-color: #4adc8c !important;
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

    .ant-table-thead {
      tr {
        th {
          font-size: 12px !important;
          font-weight: ${theme.weight.semiBold} !important;
          &::before {
            display: none !important;
          }
        }
      }
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
        padding: 12px !important;
        border: 1px solid ${theme.color.midGrey} !important;
        border-color: transparent !important;
        border-style: solid none solid none !important;
        border-bottom: 1px solid ${theme.color.midGrey} !important;

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
        border-bottom-style: solid !important;
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

    .ant-checkbox-wrapper {
      ${borderedCheckboxCss};
      ${borderedCheckboxMiddleCss};
    }
  `};
`;
