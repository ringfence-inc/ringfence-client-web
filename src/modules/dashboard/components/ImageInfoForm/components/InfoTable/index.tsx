import { HtmlHTMLAttributes } from "react";

// Styles
import { Table, TBody, TR, TD } from "./styles";
import { GreyText, Text } from "../styles";

// Types
export interface InfoTableItem {
  label: string;
  value: string;
}
export interface InfoTableProps extends HtmlHTMLAttributes<HTMLTableElement> {
  items?: InfoTableItem[];
}

export const InfoTable = ({ items = [], ...props }: InfoTableProps) => {
  return (
    <Table {...props}>
      <TBody>
        {items.map(({ label, value }) => (
          <TR key={label}>
            <TD>
              <GreyText>{label}</GreyText>
            </TD>
            <TD>
              <Text>{value}</Text>
            </TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

export default InfoTable;
