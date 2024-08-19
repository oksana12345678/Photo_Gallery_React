import Title from "../../Title/Title";
import PriceList from "../PriceList/PriceList";
import css from "./PriceListSection.module.css";

const PriceListSection = () => {
  return (
    <section className={css.price}>
      <Title className={css.priceTitle}>price list</Title>
      <PriceList />
    </section>
  );
};

export default PriceListSection;
