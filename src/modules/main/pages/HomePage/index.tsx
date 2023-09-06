import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";

// Layouts
import MainSection from "../../layouts/MainSection";
import CardsSection from "../../layouts/CardsSection";

export interface HomePageProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const HomePage = ({ ...props }: HomePageProps) => (
  <Wrap {...props}>
    <MainSection />
    <CardsSection />
  </Wrap>
);

export default HomePage;
