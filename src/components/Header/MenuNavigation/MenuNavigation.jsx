import css from "./MenuNavigation.module.css";

const MenuNavigation = ({ toggleMenu, menuOpen }) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <a className={css.link} href="#">
            About Me
          </a>
        </li>
        <li className={css.listItem}>
          <a className={css.link} href="#">
            Portfolio
          </a>
        </li>
        <li className={css.listItem}>
          <a className={css.link} href="#">
            Price
          </a>
        </li>
        <li className={css.listItem}>
          <a className={css.link} href="#">
            Contact
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
