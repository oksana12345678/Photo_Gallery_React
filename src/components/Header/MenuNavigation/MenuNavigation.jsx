import css from "./MenuNavigation.module.css";

const MenuNavigation = ({ toggleMenu }) => {
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
      <div className={css.line}>
        <button onClick={toggleMenu} className={css.bmBurgerButton}>
          <span className={css.visuallyHidden}>button menu</span>
        </button>
      </div>
    </div>
  );
};
export default MenuNavigation;
