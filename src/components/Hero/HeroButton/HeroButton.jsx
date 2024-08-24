import css from "./HeroButton.module.css";

const HeroButton = ({ toggleOrderForm }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={toggleOrderForm}>
        order now
      </button>
    </div>
  );
};
export default HeroButton;
