import css from "./ListOfReviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
const ListOfReviews = ({ reviews }) => {
  const handleSwiperInit = (swiperInst) => {
    Swiper.current = swiperInst;
  };

  <Swiper
    ref={Swiper}
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true, dynamicBullets: true }}
    direction="horizontal"
    loop={true}
    onSlideChange={() => {
      console.log("slide change");
    }}
    onSwiper={handleSwiperInit}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 24,
        768: {
          slidesPerView: 2,
        },
        1440: { slidesPerView: 6 },
      },
    }}
  >
    {reviews.map((review) => (
      <SwiperSlide className={css.listItem} key={review.id}>
        <li>
          <ReviewsCard avatar={review.avatar_url} 
            author={review.author}
            review={review.review}
          />
        </li>
      </SwiperSlide>
    ))}
  </Swiper>;
};
export default ListOfReviews;
