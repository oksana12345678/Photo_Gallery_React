import css from "./PortfolioPhotoGallery.module.css";
import PortfolioPhotoCard from "../PortfolioPhotoCard/PortfolioPhotoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import { useState, useEffect } from "react";
import SortedBy from "../SortedBy/SortedNav";
import "swiper/css/pagination";
import fetchImages from "/src/components/fetchImages/fetchImages";
import { CgArrowLongRight } from "react-icons/cg";
// import "swiper/css/effect-coverflow";
// import "swiper/element/css/effect-coverflow";
// import { EffectCoverflow } from "swiper";
import "swiper/css/grid";

const PhotoGallery = ({ swiperId }) => {
  const secondSwiper = useRef(null);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("all");

  useEffect(() => {
    const itemSearch = async () => {
      try {
        const data = await fetchImages(searchTerm);
        setItems(data.results);
      } catch (error) {
        setError(true);
      }
    };
    itemSearch();
  }, [setItems, searchTerm]);

  const handleSwiperInit = (swiperInst) => {
    secondSwiper.current = swiperInst;
  };
  return (
    <div>
      <SortedBy swiperId="swiperTwo" onSearch={setSearchTerm} />
      <div className={css.slides}>
        {Image ? (
          <Swiper
            className={css.slides}
            id={swiperId}
            ref={secondSwiper}
            modules={[Navigation, Pagination, Grid]}
            navigation
            grid={{
              rows: 2,
            }}
            autoHeight={false}
            // loop={true}
            // effect="coverflow"
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   slideShadows: false,
            // }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            watchOverflow={true}
            direction="horizontal"
            onSlideChange={() => {
              console.log("slide change");
            }}
            onSwiper={handleSwiperInit}
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
            {items.map((item) => (
              <SwiperSlide className={css.listItem} key={item.id}>
                <PortfolioPhotoCard
                  small={item.urls.small}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>{error}</p>
        )}
        <button
          className={css.button}
          onClick={() => {
            secondSwiper.current.slideNext();
          }}
        >
          see more
          <CgArrowLongRight className={css.item} />
        </button>
      </div>
    </div>
  );
};
export default PhotoGallery;
