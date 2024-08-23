import TitlePortfolio from "../TitlePortfolio/TitlePortfolio";
import PortfolioPhotoGallery from "../PortfolioPhotoGallery/PortfolioPhotoGallery";
import css from "./PortfolioSection.module.css";

const PortfolioSection = () => {
  return (
    <section className={css.portfolio} id="portfolio">
      <TitlePortfolio />
      <PortfolioPhotoGallery swiperId="swiperTwo" />
    </section>
  );
};

export default PortfolioSection;
