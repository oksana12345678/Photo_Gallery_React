import price from "../../../../price.json";
import ListItemCard from "../ListItemCard/ListItemCard";
import css from "./PriceList.module.css";

const PriceList = () => {
  const allPrice = price;
  return (
    <>
      <ul className={css.list}>
        {allPrice.map(
          ({
            id,
            name,
            cost,
            description: { duration, photos, retouching, finish },
          }) => (
            <li className={css.listItem} key={id}>
              <ListItemCard
                name={name}
                cost={cost}
                duration={duration}
                photos={photos}
                retouching={retouching}
                finish={finish}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};
export default PriceList;
