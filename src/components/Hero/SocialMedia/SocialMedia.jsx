import css from "./SocilMedia.module.css";

const SocialMedia = () => {
  const width = "20px";
  return (
    <ul className={css.list }>
      <li>
        <a href="#">
          <svg className={css.icon} width={width} height={width}>
            <use href="/src/svg/icon.svg#icon-twitter"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg className={css.icon} width={width} height={width}>
            <use href="/src/svg/icon.svg#icon-google"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg className={css.icon} width={width} height={width}>
            <use href="/src/svg/icon.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg className={css.icon} width={width} height={width}>
            <use href="/src/svg/icon.svg#icon-in"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
