import { PiTwitterLogoLight } from "react-icons/pi";
import { SlSocialGoogle } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import css from "./FooterSocial.module.css";
const FooterSocial = () => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <a href="#">
          <PiTwitterLogoLight className={css.icon} />
        </a>
      </li>
      <li className={css.listItem}>
        <a href="#">
          <SlSocialGoogle className={css.icon} />
        </a>
      </li>
      <li className={css.listItem}>
        <a href="#">
          <LuFacebook className={css.icon} />
        </a>
      </li>
      <li className={css.listItem}>
        <a href="#">
          <SlSocialLinkedin className={css.icon} />
        </a>
      </li>
    </ul>
  );
};
export default FooterSocial;
