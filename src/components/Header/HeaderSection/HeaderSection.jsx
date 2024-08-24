import MobilMenu from "../../MobilMenu/MobilMenu";
import Logo from "../Logo/Logo";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import css from "./HeaderSection.module.css";

const HeaderSection = ({ toggleMenu, menuOpen, onStateChange }) => {
  return (
    <div>
      <header className={css.topLine}>
        <div className={css.hederWrapper}>
          <Logo />
          <MenuNavigation toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      </header>
      <MobilMenu menuOpen={menuOpen} onStateChange={onStateChange} />
    </div>
  );
};
export default HeaderSection;
