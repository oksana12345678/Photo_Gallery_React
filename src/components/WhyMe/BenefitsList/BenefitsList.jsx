import css from "./BenefitsList.module.css";
import ListItemCard from "../ListItemCard/ListItemCard";

const BenefitsList = () => {
  return (
    <ul className={css.list}>
      <ListItemCard />
    </ul>
  );
};
export default BenefitsList;
