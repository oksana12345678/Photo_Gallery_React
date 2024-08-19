import css from "./MobilMenu.module.css";
import { VscChromeClose } from "react-icons/vsc";
const MobilMenu = ({
  menuOpen,
  onStateChange = () => {},
  // outerContainerId = "outer-container",
  toggleMenu = () => {},
}) => {
  return (
    <div className={`${css.container} ${menuOpen ? css.open : ""}`}>
      <div onClick={toggleMenu} className={css.bmBurgerButton}>
        <VscChromeClose className={css.icon} />
      </div>
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
  );
};

export default MobilMenu;
