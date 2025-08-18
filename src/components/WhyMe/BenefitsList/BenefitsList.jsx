import css from "./BenefitsList.module.css";
// import { LiaPenSolid } from "react-icons/lia";
// import { PiLightbulbFilament } from "react-icons/pi";
// import { FaRegStar } from "react-icons/fa6";
// import { BsLightningCharge } from "react-icons/bs";
// import { FiTool } from "react-icons/fi";
import data from "../data/why_me_data.json";
import ListItemCard from "../ListItemCard/ListItemCard";

const BenefitsList = () => {
  return (
    <ul className={css.list}>
      <ListItemCard data={data} />{" "}
    </ul>
  );
};
export default BenefitsList;
