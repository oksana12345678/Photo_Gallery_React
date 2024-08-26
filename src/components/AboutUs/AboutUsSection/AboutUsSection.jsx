import { useEffect, useState } from "react";
import DescList from "../DescList/DescList";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";
import css from "./AboutUsSection.module.css";
import fetchImages from "../../fetchImages/fetchImages";

const AboutUsSection = ({ setError }) => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("wedding");
  const [page, setPage] = useState(4);
  const perPage = 30;

  useEffect(() => {
    const imageSearch = async () => {
      try {
        setError(false);
        const data = await fetchImages(searchTerm, page, perPage);
        setImages(data.results);
      } catch (error) {
        setError(true);
      }
    };
    imageSearch();
  }, [setImages, searchTerm, setError, page]);

  return (
    <section className={css.aboutUsSection} id="about">
      <div className={css.containerAbout}>
        <TitleAndDesc />
        <DescList />
      </div>
      <PhotoGallery items={images} />
    </section>
  );
};

export default AboutUsSection;
