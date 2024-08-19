import css from "./SocilMedia.module.css";
import { PiTwitterLogoLight } from "react-icons/pi";
import { SlSocialGoogle } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

const SocialMedia = () => {
  return (
    <ul className={css.list}>
      <li>
        <a href="#">
          <PiTwitterLogoLight className={css.icon} />
        </a>
      </li>
      <li>
        <a href="#">
          <SlSocialGoogle className={css.icon} />
        </a>
      </li>
      <li>
        <a href="#">
          <LuFacebook className={css.icon} />
        </a>
      </li>
      <li>
        <a href="#">
          <SlSocialLinkedin className={css.icon} />
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
