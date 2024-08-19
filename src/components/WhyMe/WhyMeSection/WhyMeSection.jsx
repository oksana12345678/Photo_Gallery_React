import BenefitsList from "../BenefitsList/BenefitsList";
import WhyTitleAndDesc from "../WhyTitleAndDesc/WhyTitleAndDesc";
import css from "./WhyMeSection.module.css";
const WhyMeSection = () => {
  return (
    <section className={css.whyMe}>
      <WhyTitleAndDesc />
      <BenefitsList />
    </section>
  );
};

export default WhyMeSection;
