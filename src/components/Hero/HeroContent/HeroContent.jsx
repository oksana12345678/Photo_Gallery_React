import css from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.titleOne}>
        photo<span className={css.titleTwo}>graphy</span>
      </h1>
      <p className={css.desc}>
        Pellentesque mauris a lobortis in bibendum sed lobortis semper. Eget eu
        vel eu vitae.
      </p>
    </div>
  );
};
export default HeroContent;
