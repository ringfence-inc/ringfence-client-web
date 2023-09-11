import styled, { css } from "styled-components";

// Components
import SectionWrap, { SectionWrapProps } from "../../components/SectionWrap";
import { SectionTitle, SectionTitleProps } from "../../components/SectionTitle";
import { PromoCardsCarousel } from "../../components/PromoCardsCarousel";

// Styled components
export const StyledSectionTitle = styled(SectionTitle)<SectionTitleProps>``;

export const StyledPromoCardsCarousel = styled(PromoCardsCarousel)``;

export const Description = styled.span`
  ${({ theme }) => css`
    max-width: 486px;
    color: ${theme.color.white};
    font-size: ${theme.font.h3};
  `};
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
`;

export const Wrap = styled(SectionWrap)<SectionWrapProps>`
  margin-top: 0;
  ${({ theme }) => css`
    background-color: ${theme.colorPrimary};
  `};
`;
