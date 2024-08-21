import { useEffect } from "react";
import css from "./MobilMenu.module.css";
import MobilSocial from "./MobilSocial/MobilSocial";

const MobilMenu = ({ menuOpen, onStateChange = () => {} }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
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
        <MobilSocial />
      </div>
    </div>
  );
};

export default MobilMenu;
