import { useState, useEffect } from "react";
import css from "./PortfolioPhotoGallery.module.css";
import PortfolioPhotoCard from "../PortfolioPhotoCard/PortfolioPhotoCard";
import "swiper/css";
import SortedBy from "../SortedBy/SortedNav";
import "swiper/css/pagination";
import fetchImages from "/src/components/fetchImages/fetchImages";
import { CgArrowLongRight } from "react-icons/cg";
import "swiper/css/grid";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [page] = useState(null);
  const [searchTerm, setSearchTerm] = useState("all");

  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(6);
      } else {
        setPerPage(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const itemSearch = async () => {
      try {
        const data = await fetchImages(searchTerm, page, perPage);
        setItems(data.results);
      } catch (error) {
        setError(true);
      }
    };
    itemSearch();
  }, [searchTerm, page, perPage]);

  return (
    <div>
      <SortedBy onSearch={setSearchTerm} />
      <div className={css.container}>
        {items.length > 0 ? (
          <ul className={css.slides}>
            {items.map((item) => (
              <li className={css.listItem} key={item.id}>
                <PortfolioPhotoCard
                  small={item.urls.small}
                  description={item.description}
                  item={item}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>{error ? "Error loading images" : "Loading..."}</p>
        )}
        <button className={css.button}>
          <Link className={css.link} to={"/more-photos"}>
            see more
            <CgArrowLongRight className={css.item} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
