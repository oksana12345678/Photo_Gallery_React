import { TbArrowBigRightLine } from "react-icons/tb";
import { TbArrowBigLeftLine } from "react-icons/tb";
import css from "./ButtonPrivNext.module.css";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import clsx from "clsx";

SwiperCore.use([Navigation]);

const ButtonPrivNext = ({ swiper, isEnd, isBeginning }) => {
  const firstSlide = clsx(css.buttonArrow, { [css.end]: isBeginning });
  const lastSlide = clsx(css.buttonArrow, { [css.end]: isEnd });

  return (
    <div className={css.buttonContainer}>
      <div
        className={firstSlide}
        onClick={() => swiper.current.slidePrev()}
        disabled={isBeginning}
      >
        <TbArrowBigLeftLine className={css.icon} />
      </div>
      <div
        className={lastSlide}
        onClick={() => {
          swiper.current.slideNext();
        }}
      >
        <TbArrowBigRightLine className={css.icon} />
      </div>
    </div>
  );
};
export default ButtonPrivNext;
