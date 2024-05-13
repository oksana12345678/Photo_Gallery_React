import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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
      <button
        className={firstSlide}
        onClick={() => swiper.current.slidePrev()}
        disabled={isBeginning}
      >
        <IoIosArrowBack className={css.icon} />
      </button>
      <button
        className={lastSlide}
        onClick={() => {
          swiper.current.slideNext();
        }}
      >
        <IoIosArrowForward className={css.icon} />
      </button>
    </div>
  );
};
export default ButtonPrivNext;
