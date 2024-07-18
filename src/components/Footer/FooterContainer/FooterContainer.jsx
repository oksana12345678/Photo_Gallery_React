import Logo from "../../Header/Logo/Logo";
import FooterSocial from "../FooterSocial/FooterSocial";
import Copyright from "../Copyright/Copyright";
import css from "./FooterContainer.module.css";

const FooterContainer = () => {
  return (
    <div className={css.container}>
      <div className={css.logoAndSocial}>
        <Logo />
        <FooterSocial />
      </div>
      <Copyright />
    </div>
  );
};
export default FooterContainer;
