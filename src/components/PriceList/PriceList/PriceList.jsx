import price from "../../../../price.json";
import ListItemCard from "../ListItemCard/ListItemCard";
import css from "./PriceList.module.css";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const PriceList = () => {
  const allPrice = price;
  return (
    <>
      <Swiper
        className={css.list}
        modules={[Navigation, Pagination]}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        loop={true}
        pagination={{ dynamicBullets: true }}
        watchOverflow={true}
        direction="horizontal"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {allPrice.map(
          ({
            id,
            name,
            cost,
            description: { duration, photos, retouching, finish },
          }) => (
            <SwiperSlide className={css.listItem} key={id}>
              <ListItemCard
                name={name}
                cost={cost}
                duration={duration}
                photos={photos}
                retouching={retouching}
                finish={finish}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};
export default PriceList;
