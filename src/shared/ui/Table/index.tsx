// Styles
import {
  StyledTable,
  AntdTableProps,
  ColumnGroupType,
  ColumnProps,
  ColumnType,
  ColumnsType,
  TablePaginationConfig,
} from "./styles";

// Re export types
export type {
  AntdTableProps,
  ColumnGroupType,
  ColumnProps,
  ColumnType,
  ColumnsType,
  TablePaginationConfig,
};

// Types
export interface TableProps<RecordType> extends AntdTableProps<RecordType> {
  fixedHeight?: boolean;
  rowHeight?: number;
  baseHeight?: number;
}

export const Table = <RecordType extends object>({
  fixedHeight = true,
  rowHeight = 57,
  baseHeight = 55,
  pagination = {},
  ...props
}: TableProps<RecordType>) => {
  const { pageSize = 10 } = pagination as TablePaginationConfig;

  const paginationConfig: TablePaginationConfig = {
    ...pagination,
    pageSize,
  };

  return (
    <StyledTable
      pagination={paginationConfig}
      $rowHeight={rowHeight}
      $baseHeight={baseHeight}
      $pageSize={pageSize}
      {...props}
    />
  );
};

export default Table;
