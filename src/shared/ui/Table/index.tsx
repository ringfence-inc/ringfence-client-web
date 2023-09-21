// Styles
import { StyledTable, AntdTableProps } from "./styles";

// Types
export interface TableProps<RecordType> extends AntdTableProps<RecordType> {}

export const Table = <RecordType extends object>({
  ...props
}: TableProps<RecordType>) => {
  return <StyledTable {...props} />;
};

export default Table;
