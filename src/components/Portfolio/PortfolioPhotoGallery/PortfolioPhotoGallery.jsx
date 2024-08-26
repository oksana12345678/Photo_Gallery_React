import css from "./PortfolioPhotoGallery.module.css";
import PortfolioPhotoCard from "../PortfolioPhotoCard/PortfolioPhotoCard";
import "swiper/css";
import { useState, useEffect } from "react";
import SortedBy from "../SortedBy/SortedNav";
import "swiper/css/pagination";
import fetchImages from "/src/components/fetchImages/fetchImages";
import { CgArrowLongRight } from "react-icons/cg";
import "swiper/css/grid";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(null);

  const [searchTerm, setSearchTerm] = useState("all");
  const perPage = 6;

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
  }, [setItems, searchTerm, page]);

  return (
    <div>
      <SortedBy onSearch={setSearchTerm} />
      <div className={css.container}>
        {Image ? (
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
          <p>{error}</p>
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
