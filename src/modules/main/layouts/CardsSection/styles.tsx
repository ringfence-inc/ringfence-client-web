import styled, { css } from "styled-components";

// Components
import SectionWrap, { SectionWrapProps } from "../../components/SectionWrap";
import { Text, TextProps } from "@/shared/ui/Typography";
import { SectionTitle, SectionTitleProps } from "../../components/SectionTitle";
import { PromoCardsCarousel } from "../../components/PromoCardsCarousel";

// Styled components
export const StyledSectionTitle = styled(SectionTitle)<SectionTitleProps>``;

export const StyledPromoCardsCarousel = styled(PromoCardsCarousel)``;

export const Description = styled(Text)<TextProps>``;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrap = styled(SectionWrap)<SectionWrapProps>`
  ${({ theme }) => css`
    background-color: ${theme.colorPrimary};
  `};
`;
