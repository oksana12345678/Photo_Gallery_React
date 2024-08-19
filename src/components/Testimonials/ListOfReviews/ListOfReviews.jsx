import css from "./ListOfReviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRef, useState } from "react";
import "swiper/css/effect-fade";
import clsx from "clsx";

const ListOfReviews = ({ reviews }) => {
  const reviewSwiper = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(false);
  const firstSlide = clsx(css.buttonArrow, { [css.end]: isBeginning });
  const lastSlide = clsx(css.buttonArrow, { [css.end]: isEnd });

  const handleSwiperInit = (swiperInst) => {
    reviewSwiper.current = swiperInst;
    setIsBeginning(ListOfReviews.isBeginning);
  };
  const handleSlideChange = () => {
    const swiperInstance = reviewSwiper.current;
    if (swiperInstance) {
      const isEnd = swiperInstance.isEnd;
      const isBeginning = swiperInstance.isBeginning;
      setIsEnd(isEnd);
      setIsBeginning(isBeginning);
    }
  };

  return (
    <div className={css.wrapper}>
      <Swiper
        ref={reviewSwiper}
        modules={[Navigation]}
        navigation
        speed={1000}
        direction="horizontal"
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiperInit}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {reviews &&
          reviews.map((review) => (
            <SwiperSlide className={css.listItem} key={review._id}>
              <ReviewsCard
                avatar={review.avatar_url}
                author={review.author}
                review={review.review}
              />
            </SwiperSlide>
          ))}
        <div className={css.buttonContainer}>
          <div
            className={firstSlide}
            onClick={() => reviewSwiper.current.slidePrev()}
          >
            <IoIosArrowBack className={css.icon} />
          </div>
          <div
            className={lastSlide}
            onClick={() => {
              reviewSwiper.current.slideNext();
            }}
          >
            <IoIosArrowForward className={css.icon} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};
export default ListOfReviews;
