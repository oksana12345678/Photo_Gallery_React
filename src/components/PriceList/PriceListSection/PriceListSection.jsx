import { useState } from "react";
import Title from "../../Title/Title";
import PriceList from "../PriceList/PriceList";
import css from "./PriceListSection.module.css";
import SessionSchedule from "../SessionSchedule/SessionSchedule";

const PriceListSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };
  const closeCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <section className={css.price} id="price">
      <Title className={css.priceTitle}>price list</Title>
      <PriceList toggleCalendar={toggleCalendar} />
      <SessionSchedule showCalendar={showCalendar} onClose={closeCalendar} />
    </section>
  );
};

export default PriceListSection;
