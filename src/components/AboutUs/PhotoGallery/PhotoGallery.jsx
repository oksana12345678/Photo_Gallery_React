import css from "./PhotoGallery.module.css";
import PhotoCard from "../PhotoCard/PhotoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import ButtonPrivNext from "../ButtonPrivNext/ButtonPrivNext";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const PhotoGallery = ({ items }) => {
  const swiper = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(false);

  const handleSlideChange = () => {
    const swiperInstance = swiper.current;
    if (swiperInstance) {
      const isEnd = swiperInstance.isEnd;
      const isBeginning = swiperInstance.isBeginning;
      setIsEnd(isEnd);
      setIsBeginning(isBeginning);
    }
  };
  const handleSwiperInit = (swiperInstance) => {
    swiper.current = swiperInstance;
    setIsBeginning(swiperInstance.isBeginning);
  };
  return (
    <div className={css.slides}>
      <Swiper
        ref={swiper}
        className={css.slides}
        modules={[Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        navigation
        direction="horizontal"
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiperInit}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,

            768: {
              slidesPerView: 2,
            },
            1440: { slidesPerView: 6 },
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide className={css.listItem} key={item.id}>
            <PhotoCard small={item.urls.small} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonPrivNext swiper={swiper} isEnd={isEnd} isBeginning={isBeginning} />
    </div>
  );
};
export default PhotoGallery;
