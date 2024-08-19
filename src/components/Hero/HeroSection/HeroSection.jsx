import HeroButton from "../HeroButton/HeroButton";
import HeroContent from "../HeroContent/HeroContent";
import SocialMedia from "../SocialMedia/SocialMedia";
import css from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.heroAll}>
        <div className={css.heroContainer}>
          <HeroContent />
          <HeroButton />
        </div>
        <SocialMedia />
      </div>
    </section>
  );
};

export default HeroSection;
