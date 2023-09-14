import React from "react";

// Styles
import { Wrap } from "./styles";

// Layouts
import MainSection from "../../layouts/MainSection";
import CardsSection from "../../layouts/CardsSection";
import PromoSection from "../../layouts/PromoSection";
import SignUpSection from "../../layouts/SignUpSection";
import Footer from "../../layouts/Footer";

export const HomePage = ({ ...props }: any) => (
  <Wrap>
    <MainSection />
    <CardsSection />
    <PromoSection />
    <SignUpSection />
    <Footer />
  </Wrap>
);

export default HomePage;
