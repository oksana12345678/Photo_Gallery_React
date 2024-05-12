import css from "./MenuNavigation.module.css";

const MenuNavigation = () => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <a className={css.link} href="#">
          {" "}
          Portfolio
        </a>
      </li>
      <li className={css.listItem}>
        <a className={css.link} href="#">
          {" "}
          About Me
        </a>
      </li>
      <li className={css.listItem}>
        <a className={css.link} href="#">
          {" "}
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
  );
};
export default MenuNavigation;
