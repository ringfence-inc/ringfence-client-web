import React, { HtmlHTMLAttributes } from "react";

// Styles
import { Wrap } from "./styles";

// Layouts
import MainSection from "../../layouts/MainSection";
import CardsSection from "../../layouts/CardsSection";
import PromoSection from "../../layouts/PromoSection";
import SignUpSection from "../../layouts/SignUpSection";
import Footer from "../../layouts/Footer";

// Components
import AuthModal from "@/modules/auth/components/AuthModal";

export interface HomePageProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const HomePage = ({ ...props }: HomePageProps) => (
  <Wrap {...props}>
    <MainSection />
    <CardsSection />
    <PromoSection />
    <SignUpSection />
    <Footer />
    <AuthModal />
  </Wrap>
);

export default HomePage;
