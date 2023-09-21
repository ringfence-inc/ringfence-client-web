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
export interface TableProps<RecordType> extends AntdTableProps<RecordType> {}

export const Table = <RecordType extends object>({
  ...props
}: TableProps<RecordType>) => {
  return <StyledTable {...props} />;
};

export default Table;
