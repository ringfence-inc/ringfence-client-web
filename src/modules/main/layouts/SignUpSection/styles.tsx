import styled, { css } from "styled-components";

// Components
import SectionWrap, { SectionWrapProps } from "../../components/SectionWrap";
import SectionTitle, { SectionTitleProps } from "../../components/SectionTitle";
import _SignUpForm from "../../components/SignUpForm";

// Re export types
export type { SectionWrapProps, SectionTitleProps };

// Styled components
export const Wrap = styled(SectionWrap)<SectionWrapProps>`
  background-image: linear-gradient(
      281deg,
      rgba(32, 34, 33, 0) 0%,
      #202221 100%
    ),
    url(/icons/bg-symbol.svg);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled(SectionTitle)<SectionTitleProps>``;

export const SignUpForm = styled(_SignUpForm)``;
