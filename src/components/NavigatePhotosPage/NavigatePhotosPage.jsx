import { Link } from "react-router-dom";
import css from "./NavigatePhotosPage.module.css";

const NavigatePhotosPage = () => {
  return (
    <header>
      <nav className={css.navigation}>
        <div className={css.blur}>
          <Link to={"/"} className={css.logo}>
            grapher shot.
          </Link>
          <Link to={"/"} className={css.home}>
            home
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigatePhotosPage;
