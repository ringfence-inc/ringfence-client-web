import React from "react";

// Styles
import {
  Wrap,
  TopWrap,
  StyledSectionTitle,
  StyledPromoCardsCarousel,
  Description,
} from "./styles";

// Types
export interface CardsSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardsSection = ({ ...props }: CardsSectionProps) => {
  return (
    <Wrap {...props}>
      <TopWrap>
        <StyledSectionTitle
          items={["WORK TOGETHER", "TO HARNESS THE", "POWER OF AI"]}
        />
        <Description>
          Ringfence enables users to harness the vast potential of generative AI
          while respecting artists’ control over their work, ushering in an era
          of creative collaboration.
        </Description>
      </TopWrap>
      <StyledPromoCardsCarousel />
    </Wrap>
  );
};

export default CardsSection;
