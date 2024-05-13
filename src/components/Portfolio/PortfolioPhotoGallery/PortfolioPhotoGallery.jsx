import css from "./PortfolioPhotoGallery.module.css";
import PortfolioPhotoCard from "../PortfolioPhotoCard/PortfolioPhotoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import { useState, useEffect } from "react";
import SortedBy from "../SortedBy/SortedNav";
import "swiper/css/pagination";
import fetchImages from "/src/components/fetchImages/fetchImages";
import { CgArrowLongRight } from "react-icons/cg";
const PhotoGallery = ({ swiperId }) => {
  const secondSwiper = useRef(null);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("all");

  useEffect(() => {
    const imageSearch = async () => {
      try {
        const data = await fetchImages(searchTerm);
        console.log(data);
        setItems(data.results);
        console.log(data);
      } catch (error) {
        setError(true);
      }
    };
    imageSearch();
  }, [setItems, searchTerm]);

  const handleSwiperInit = (swiperInst) => {
    secondSwiper.current = swiperInst;
  };
  return (
    <div className={css.slides}>
      <SortedBy swiperId="swiperTwo" onSearch={setSearchTerm} />

      {Image ? (
        <Swiper
          id={swiperId}
          ref={secondSwiper}
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
  );
};
export default PhotoGallery;
