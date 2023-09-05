import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";

// Layouts
import MainSection from "../../layouts/MainSection";

export interface HomePageProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const HomePage = ({ ...props }: HomePageProps) => (
  <Wrap {...props}>
    <MainSection />
  </Wrap>
);

export default HomePage;
