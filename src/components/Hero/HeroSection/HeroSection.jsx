import OrderWindow from "../../OrderNow/OrderWindow/OrderWindow";
import HeroButton from "../HeroButton/HeroButton";
import HeroContent from "../HeroContent/HeroContent";
import SocialMedia from "../SocialMedia/SocialMedia";
import css from "./HeroSection.module.css";

const HeroSection = ({ toggleOrderForm, orderOpen, close }) => {
  return (
    <section className={css.heroSection}>
      <div className={css.heroAll}>
        <div className={css.heroContainer}>
          <HeroContent />
          <HeroButton toggleOrderForm={toggleOrderForm} />
          <OrderWindow orderOpen={orderOpen} close={close} />
        </div>
        <SocialMedia />
      </div>
    </section>
  );
};

export default HeroSection;
