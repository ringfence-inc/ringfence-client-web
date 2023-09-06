import React from "react";

// Styles
import {
  Wrap,
  TopWrap,
  BottomWrap,
  NumText,
  CardTitle,
  CardDescription,
} from "./styles";

// Types
export interface PromoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  num?: number;
  title?: string;
  description?: string;
}

export const PromoCard = ({
  num = 0,
  title = "",
  description = "",
  ...props
}: PromoCardProps) => {
  return (
    <Wrap {...props}>
      <TopWrap>
        <NumText>{num < 10 ? `0${num}` : num}</NumText>
      </TopWrap>
      <BottomWrap>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </BottomWrap>
    </Wrap>
  );
};

export default PromoCard;
