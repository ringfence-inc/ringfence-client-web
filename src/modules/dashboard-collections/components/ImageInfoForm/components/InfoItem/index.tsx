import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";
import { GreyText, Text } from "../styles";

// Types
import type { InfoTableItem } from "../InfoTable";
export interface InfoItemProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    InfoTableItem {}

export const InfoItem = ({
  label = "",
  value = "",
  ...props
}: InfoItemProps) => {
  return (
    <Wrap {...props}>
      <GreyText>{label}</GreyText>
      <Text>{value}</Text>
      {props.children}
    </Wrap>
  );
};

export default InfoItem;
