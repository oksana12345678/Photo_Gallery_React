import css from "./ListItemCard.module.css";
import { LiaPenSolid } from "react-icons/lia";
import { PiLightbulbFilament } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { FiTool } from "react-icons/fi";

const ListItemCard = () => {
  return (
    <div className={css.mainContainer}>
      <li className={css.listItem}>
        <div className={css.container}>
          <LiaPenSolid className={css.icon} />
          <h3 className={css.title}>agency</h3>
          <p className={css.desc}>
            Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum
            sed libero sed at sed nisl sodales phasellus et.
          </p>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.container}>
          <PiLightbulbFilament className={css.icon} />

          <h3 className={css.title}>choose idea</h3>
          <p className={css.desc}>
            Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum
            sed libero sed at sed nisl sodales phasellus et.
          </p>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.container}>
          <FaRegStar className={css.icon} />

          <h3 className={css.title}>satisfaction</h3>
          <p className={css.desc}>
            Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum
            sed libero sed at sed nisl sodales phasellus et.
          </p>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.container}>
          <FiTool className={css.icon} />

          <h3 className={css.title}>quality</h3>
          <p className={css.desc}>
            Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum
            sed libero sed at sed nisl sodales phasellus et.
          </p>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.container}>
          <BsLightningCharge className={css.icon} />

          <h3 className={css.title}>creativity</h3>
          <p className={css.desc}>
            Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum
            sed libero sed at sed nisl sodales phasellus et.
          </p>
        </div>
      </li>
    </div>
  );
};
export default ListItemCard;
