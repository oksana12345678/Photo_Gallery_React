import css from "./SocialMedia.module.css";
import {
  SlSocialTwitter,
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";

const SocialMedia = () => {
  return (
    <ul className={css.list}>
      <li>
        <a href="#">
          <SlSocialTwitter className={css.icon} />
        </a>
      </li>
      <li>
        <a href="#">
          <SlSocialGoogle className={css.icon} />
        </a>
      </li>
      <li>
        <a href="#">
          <SlSocialFacebook className={css.icon} />
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
