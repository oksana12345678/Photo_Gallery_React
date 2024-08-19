import css from "./MobilMenu.module.css";
const MobilMenu = ({
  menuOpen,
  onStateChange = () => {},
}) => {
  return (
    <div className={`${css.container} ${menuOpen ? css.open : ""}`}>
      <div className={css.blurBack}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <a onClick={onStateChange} className={css.link} href="#">
              About Me
            </a>
          </li>
          <li className={css.listItem}>
            <a onClick={onStateChange} className={css.link} href="#">
              Portfolio
            </a>
          </li>
          <li className={css.listItem}>
            <a onClick={onStateChange} className={css.link} href="#">
              Price
            </a>
          </li>
          <li className={css.listItem}>
            <a onClick={onStateChange} className={css.link} href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobilMenu;
