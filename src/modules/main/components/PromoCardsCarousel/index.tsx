// Styles
import {
  Wrap,
  StyledCarousel,
  StyledCard,
  CarouselProps,
  PromoCardProps,
} from "./styles";

// Fake data
import promoCards from "../../mock/promoCards";

// Types
export interface PromoCardsCarouselProps extends CarouselProps {
  items?: PromoCardProps[][];
}

export const PromoCardsCarousel = ({
  items = promoCards,
  ...props
}: PromoCardsCarouselProps) => {
  return (
    <StyledCarousel {...props}>
      {items.map((cards, subIndex) => {
        return (
          <Wrap key={subIndex}>
            {cards.map((card, subIndex) => {
              return <StyledCard key={subIndex} {...card} num={subIndex + 1} />;
            })}
          </Wrap>
        );
      })}
    </StyledCarousel>
  );
};
