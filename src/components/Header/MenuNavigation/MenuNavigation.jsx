import css from "./MenuNavigation.module.css";

const MenuNavigation = ({ toggleMenu, menuOpen }) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <a className={css.link} href="#about">
            About Us
          </a>
        </li>
        <li className={css.listItem}>
          <a className={css.link} href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className={css.listItem}>
          <a className={css.link} href="#price">
            Price
          </a>
        </li>
        <li className={css.listItem}>
          <a className={css.link} href="#contact">
            Get More
          </a>
        </li>
      </ul>
      <div className={css.line} onClick={toggleMenu}>
        <div
          className={`${css.bmBurgerButton} ${menuOpen ? css.open : ""}`}
        ></div>
        <div className={`${css.bottomLine} ${menuOpen ? css.open : ""}`}></div>
      </div>
    </div>
  );
};
export default MenuNavigation;
