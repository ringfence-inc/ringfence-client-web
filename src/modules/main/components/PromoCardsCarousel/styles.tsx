import styled, { css } from "styled-components";

// Components
import PromoCard, { PromoCardProps } from "../PromoCard";
import Carousel, { CarouselProps } from "antd/lib/carousel";

// Re export types
export type { CarouselProps, PromoCardProps };

// Styled components
export const StyledCard = styled(PromoCard)<PromoCardProps>``;
export const StyledCarousel = styled(Carousel)<CarouselProps>``;
export const Wrap = styled.div`
  display: flex !important;
  gap: 32px;
`;
