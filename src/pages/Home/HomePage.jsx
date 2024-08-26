import { useState } from "react";
import AboutUsSection from "../../components/AboutUs/AboutUsSection/AboutUsSection";
import FooterSection from "../../components/Footer/FooterSection/FooterSection";
import GetMoreSection from "../../components/GetMoreInfo/GetMoreSection/GetMoreSection";
import HeroSection from "../../components/Hero/HeroSection/HeroSection";
import MainContainer from "../../components/MainContainer";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";
import PriceListSection from "../../components/PriceList/PriceListSection/PriceListSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection/TestimonialsSection";
import WhyMeSection from "../../components/WhyMe/WhyMeSection/WhyMeSection";
import HeaderSection from "../../components/Header/HeaderSection/HeaderSection";
import OrderWindow from "../../components/OrderNow/OrderWindow/OrderWindow";

const HomePage = () => {
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setOrderOpen(false);
  };

  const toggleOrderForm = () => {
    setOrderOpen(!orderOpen);
  };

  return (
    <>
      {error && <p>Sorry went wrong!</p>}
      <HeaderSection
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        onStateChange={handleStateChange}
      />

      <MainContainer>
        <HeroSection
          orderOpen={orderOpen}
          close={closeMenu}
          toggleOrderForm={toggleOrderForm}
        />
        <AboutUsSection setError={setError} />

        <PortfolioSection />

        <WhyMeSection />
        <TestimonialsSection setError={setError} />
        <PriceListSection />
        <GetMoreSection />
      </MainContainer>
      <FooterSection />
      <OrderWindow />
    </>
  );
};

export default HomePage;
