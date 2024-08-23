import { useEffect, useState } from "react";
import AboutUsSection from "../../components/AboutUs/AboutUsSection/AboutUsSection";
import fetchReviews from "../../components/fetchReviews/fetchReviews";
import FooterSection from "../../components/Footer/FooterSection/FooterSection";
import GetMoreSection from "../../components/GetMoreInfo/GetMoreSection/GetMoreSection";
import HeroSection from "../../components/Hero/HeroSection/HeroSection";
import MainContainer from "../../components/MainContainer";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";
import PriceListSection from "../../components/PriceList/PriceListSection/PriceListSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection/TestimonialsSection";
import WhyMeSection from "../../components/WhyMe/WhyMeSection/WhyMeSection";
import fetchImages from "../../components/fetchImages/fetchImages";
import HeaderSection from "../../components/Header/HeaderSection/HeaderSection";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("wedding");
  const [reviews, setReviews] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
};

export default HomePage;
