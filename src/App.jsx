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
import Title from "./components/Portfolio/Title/Title";
import TestimonialsTitle from "./components/Testimonials/TestimonialsTitle/TestimonialsTitle";
import fetchReviews from "./components/fetchReviews/fetchReviews";
import ListOfReviews from "./components/Testimonials/ListOfReviews/ListOfReviews";
export default function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("wedding");
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const imageSearch = async () => {
      try {
        setError(false);
        const data = await fetchImages(searchTerm);
        console.log(data);
        setImages(data.results);
        console.log(data);
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
        setReviews(data.results);
        console.log(data);
      } catch (error) {
        setError(true);
      }
    };
    getReviews();
  }, [setReviews]);

  return (
    <>
      <header className={css.topLine}>
        <div className={css.hederWrapper}>
          <Logo />
          <MenuNavigation />
        </div>
      </header>
      <main>
        <section className={css.heroSection}>
          <div>
            <HeroContent />
            <HeroButton />
          </div>
          <SocialMedia />
        </section>
        <section className={css.aboutUs}>
          <TitleAndDesc />
          <DescList />
          <PhotoGallery items={images} />
        </section>
        <section className={css.portfolio}>
          <Title />
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
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}
