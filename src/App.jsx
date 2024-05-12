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
export default function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const imageSearch = async () => {
      const data = await fetchImages(searchTerm);
      console.log(data);
      setImages(data);
      setSearchTerm(searchTerm);
      console.log(data);
    };
    imageSearch();
  }, [setImages, searchTerm]);
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
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}
