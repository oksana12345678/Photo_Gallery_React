import { PiTwitterLogoLight } from "react-icons/pi";
import { SlSocialGoogle } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import css from "./FooterSocial.module.css";
const FooterSocial = () => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <PiTwitterLogoLight className={css.icon} />
      </li>
      <li className={css.listItem}>
        <SlSocialGoogle className={css.icon} />
      </li>
      <li className={css.listItem}>
        <LuFacebook className={css.icon} />
      </li>
      <li className={css.listItem}>
        <SlSocialLinkedin className={css.icon} />
      </li>
    </ul>
  );
};
export default FooterSocial;
