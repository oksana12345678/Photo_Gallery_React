import css from "./HeroButton.module.css";

const HeroButton = () => {
  return (
    <div className={css.container}>
      <svg className={css.iconBtn} width={100} height={30}>
        <use href="/src/svg/icon.svg#icon-Vector-3"></use>
      </svg>

      <button className={css.button}>order now</button>
    </div>
  );
};
export default HeroButton;
