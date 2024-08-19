import { useState, useEffect } from "react";
import fetchImages from "./components/fetchImages/fetchImages";
import fetchReviews from "./components/fetchReviews/fetchReviews";
import AboutUsSection from "./components/AboutUs/AboutUsSection/AboutUsSection";
import FooterSection from "./components/Footer/FooterSection/FooterSection";
import GetMoreSection from "./components/GetMoreInfo/GetMoreSection/GetMoreSection";
import HeaderSection from "./components/Header/HeaderSection/HeaderSection";
import HeroSection from "./components/Hero/HeroSection/HeroSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection/PortfolioSection";
import PriceListSection from "./components/PriceList/PriceListSection/PriceListSection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection/TestimonialsSection";
import WhyMeSection from "./components/WhyMe/WhyMeSection/WhyMeSection";
import MainContainer from "./components/MainContainer";
export default function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("wedding");
  const [reviews, setReviews] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const imageSearch = async () => {
      try {
        setError(false);
        const data = await fetchImages(searchTerm);
        setImages(data.results);
      } catch (error) {
        setError(true);
      }
    };
    imageSearch();
  }, [setImages, searchTerm]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setError(false);
        const data = await fetchReviews();
        setReviews(data);
      } catch (error) {
        setError(true);
      }
    };
    getReviews();
  }, [setReviews]);
  return (
    <>
      <HeaderSection
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        onStateChange={handleStateChange}
        closeMenu={closeMenu}
      />
      <MainContainer>
        <HeroSection />
        <AboutUsSection items={images} />
        <PortfolioSection />
        <WhyMeSection />
        <TestimonialsSection reviews={reviews} />
        <PriceListSection />
        <GetMoreSection />
      </MainContainer>
      <FooterSection />
    </>
  );
}
