import Logo from "./components/Header/Logo/Logo";
import MenuNavigation from "./components/Header/MenuNavigation/MenuNavigation";
import css from "./App.module.css";
import HeroContent from "./components/Hero/HeroContent/HeroContent";
import SocialMedia from "./components/Hero/SocialMedia/SocialMedia";
import HeroButton from "./components/Hero/HeroButton/HeroButton";
import TitleAndDesc from "./components/AboutUs/TitleAndDesc/TitleAndDesc";
import DescList from "./components/AboutUs/DescList/DescList";
import { useState, useEffect } from "react";
import fetchImages from "./components/fetchImages/fetchImages";
import PhotoGallery from "./components/AboutUs/PhotoGallery/PhotoGallery";
import BenefitsList from "./components/WhyMe/BenefitsList/BenefitsList";
import WhyTitleAndDesc from "./components/WhyMe/WhyTitleAndDesc/WhyTitleAndDesc";
import PortfolioPhotoGallery from "./components/Portfolio/PortfolioPhotoGallery/PortfolioPhotoGallery";
import Title from "./components/Title/Title";
import TestimonialsTitle from "./components/Testimonials/TestimonialsTitle/TestimonialsTitle";
import fetchReviews from "./components/fetchReviews/fetchReviews";
import ListOfReviews from "./components/Testimonials/ListOfReviews/ListOfReviews";
import PriceList from "./components/PriceList/PriceList/PriceList";
import TitlePortfolio from "./components/Portfolio/TitlePortfolio/TitlePortfolio";
import GetMoreWindow from "./components/GetMoreInfo/GetMoreWindow/GetMoreWindow";
import FooterContainer from "./components/Footer/FooterContainer/FooterContainer";
import MobilMenu from "./components/MobilMenu/MobilMenu";
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
    <div id="outer-container">
      {" "}
      <MobilMenu
        menuOpen={menuOpen}
        onStateChange={handleStateChange}
        closeMenu={closeMenu}
        toggleMenu={toggleMenu}
      />
      <header className={css.topLine}>
        <div className={css.hederWrapper}>
          <Logo />
          <MenuNavigation toggleMenu={toggleMenu} />
        </div>
      </header>
      <main id="page-wrap">
        <section className={css.heroSection}>
          <div className={css.heroAll}>
            <div className={css.heroContainer}>
              <HeroContent />
              <HeroButton />
            </div>
            <SocialMedia />
          </div>
        </section>
        <section className={css.aboutUs}>
          <div className={css.containerAbout}>
            <TitleAndDesc />
            <DescList />
          </div>
          <PhotoGallery items={images} />
        </section>
        <section className={css.portfolio}>
          <TitlePortfolio />
          <PortfolioPhotoGallery swiperId="swiperTwo" items={images} />
        </section>
        <section className={css.whyMe}>
          <WhyTitleAndDesc />
          <BenefitsList />
        </section>
        <section className={css.testimonials}>
          <TestimonialsTitle />
          <ListOfReviews reviews={reviews} />
        </section>
        <section className={css.price}>
          <Title className={css.priceTitle}>price list</Title>
          <PriceList />
        </section>
        <section className={css.getMore}>
          <GetMoreWindow />
        </section>
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </div>
  );
}
