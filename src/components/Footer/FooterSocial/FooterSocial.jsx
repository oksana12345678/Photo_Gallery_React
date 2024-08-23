import {
  SlSocialTwitter,
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";
import css from "./FooterSocial.module.css";
const FooterSocial = () => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <a href="#">
          <SlSocialTwitter className={css.icon} />
        </a>
      </li>
      <li className={css.listItem}>
        <a href="#">
          <SlSocialGoogle className={css.icon} />
        </a>
      </li>
      <li className={css.listItem}>
        <a href="#">
          <SlSocialFacebook className={css.icon} />
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
