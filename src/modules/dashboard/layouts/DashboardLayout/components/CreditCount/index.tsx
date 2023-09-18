import { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap, Text, WalletIcon } from "./styles";

// Types
export interface CreditCountProps extends HtmlHTMLAttributes<HTMLDivElement> {
  count?: number | string;
}

export const CreditCount = ({ count = "", ...props }: CreditCountProps) => {
  return (
    <Wrap {...props}>
      <WalletIcon />
      <Text>{count}</Text>
    </Wrap>
  );
};

export default CreditCount;
