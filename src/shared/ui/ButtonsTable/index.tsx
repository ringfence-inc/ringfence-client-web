import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";

// Components
import { CellButton, CellButtonProps } from "./components/CellButton";

// Re export types
export type { CellButtonProps as TdButtonProps };

// Re export components
export { CellButton as TdButton };

// Types
export interface ButtonsTableItem {
  icon?: React.ReactNode;
  text?: string;
}
export interface ButtonsTableProps
  extends HtmlHTMLAttributes<HTMLTableElement> {
  items?: CellButtonProps[];
}

export const ButtonsTable = ({ ...props }: ButtonsTableProps) => {
  return <Wrap {...props}>{props.children}</Wrap>;
};

export default ButtonsTable;
