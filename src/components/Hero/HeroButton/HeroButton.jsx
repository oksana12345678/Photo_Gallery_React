import css from "./HeroButton.module.css";

const HeroButton = () => {
  return (
    <div className={css.container}>
      <button className={css.button}>order now</button>
    </div>
  );
};
export default HeroButton;
