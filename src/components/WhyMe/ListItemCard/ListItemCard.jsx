import css from "./ListItemCard.module.css";
import { LiaPenSolid } from "react-icons/lia";
import { PiLightbulbFilament } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { FiTool } from "react-icons/fi";

const ListItemCard = ({ data }) => {
  return (
    <>
      {data.list.map((item, index) => (
        <li className={css.listItem} key={index}>
          <div className={css.container}>
            {item.icon === "LiaPenSolid" && (
              <LiaPenSolid className={css.icon} />
            )}
            {item.icon === "PiLightbulbFilament" && (
              <PiLightbulbFilament className={css.icon} />
            )}
            {item.icon === "FaRegStar" && <FaRegStar className={css.icon} />}
            {item.icon === "FiTool" && <FiTool className={css.icon} />}
            {item.icon === "BsLightningCharge" && (
              <BsLightningCharge className={css.icon} />
            )}
            <h3 className={css.title}>{item.title}</h3>
            <p className={css.desc}>{item.desc}</p>
          </div>
        </li>
      ))}
    </>
  );
};
export default ListItemCard;
