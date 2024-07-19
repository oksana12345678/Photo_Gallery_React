import { bubble as Menu } from "react-burger-menu";
import css from "./MobilMenu.module.css";
import { IoCloseOutline } from "react-icons/io5";
const MobilMenu = ({
  menuOpen,
  onStateChange,
  outerContainerId,
  toggleMenu,
}) => {
  return (
    <Menu
      pageWrapId={"page-wrap"}
      isOpen={menuOpen}
      onStateChange={onStateChange}
      outerContainerId={outerContainerId}
      styles={{
        bmBurgerButton: { display: "none" },
        bmMenuWrap: {
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "1000",
          top: "0",
          left: "0",
        },
        bmMenu: {
          background: "linear-gradient(to right, #233942 50%, #0d0f11 50%)",
          fontSize: "1.15em",
          width: "100%",
          padding: "0",
        },
        bmItem: {
          display: "flex",
        },
      }}
    >
      <div className={css.container}>
        <button onClick={toggleMenu} className={css.bmBurgerButton}>
          <IoCloseOutline className={css.icon} />
        </button>
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
    </Menu>
  );
};
export default MobilMenu;
