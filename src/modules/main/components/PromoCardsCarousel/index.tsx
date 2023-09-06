// Styles
import {
  StyledCarousel,
  StyledCard,
  CarouselProps,
  PromoCardProps,
} from "./styles";

// Fake data
import promoCards from "../../mock/promoCards";

// Types
export interface PromoCardsCarouselProps extends CarouselProps {
  items?: PromoCardProps[];
}

export const PromoCardsCarousel = ({
  items = promoCards,
  ...props
}: PromoCardsCarouselProps) => {
  return (
    <StyledCarousel {...props}>
      {items.map((item, index) => (
        <StyledCard key={index} {...item} num={index + 1} />
      ))}
    </StyledCarousel>
  );
};
