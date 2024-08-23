import { useEffect, useState } from "react";
import ImageGallery from "../../components/PhotoPageComponents/ImageGallery/ImageGallery";
import ErrorMessage from "../../components/PhotoPageComponents/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/PhotoPageComponents/LoadMoreBtn/LoadMoreBtn";
import fetchImages from "../../components/fetchImages/fetchImages.js";
import EndOfImages from "../../components/PhotoPageComponents/EndOfImages/EndOfImages";
import ImageModal from "../../components/PhotoPageComponents/ImageModal/ImageModal";
import NavigatePhotosPage from "../../components/NavigatePhotosPage/NavigatePhotosPage";
import css from "./MorePhotos.module.css";
import SortedBy from "../../components/Portfolio/SortedBy/SortedNav";

const MorePhotos = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState("");
  const [endOfCollection, setEndOfCollection] = useState(false);
  const [hasLoadedImages, setHasLoadedImages] = useState(false);
  const [totalCollection, setTotalCollection] = useState({});
  const [totalImages, setTotalImages] = useState(0);

  const handleOpenModal = (imageUrl) => {
    setSelectedImages(imageUrl);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedImages("");
    setIsOpen(false);
  };

  useEffect(() => {
    const imageSearch = async () => {
      try {
        setError(false);
        const data = await fetchImages(searchTerm);
        setImages(data.results);
      } catch (error) {
        setError(true);
      }
    };
    imageSearch();
  }, [setImages, searchTerm]);

  useEffect(() => {
    const fetchTotalImages = async () => {
      const total = Math.ceil(totalCollection / 15);
      setTotalImages(total);
    };
    fetchTotalImages();
  }, [totalCollection]);

  useEffect(() => {
    if (page >= totalImages) {
      setEndOfCollection(true);
    } else {
      setEndOfCollection(false);
    }
  }, [page, totalImages]);

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPageData = await fetchImages(searchTerm, page + 1);
      setPage((prevPage) => prevPage + 1);
      setImages((prevImages) => [...prevImages, ...nextPageData.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={css.background}>
      <NavigatePhotosPage />
      <div className={css.blur}>
        <SortedBy onSearch={setSearchTerm} />
        {images.length > 0 && (
          <ImageGallery images={images} isOpen={handleOpenModal} />
        )}
        {endOfCollection && hasLoadedImages && <EndOfImages />}
        {error && <ErrorMessage searchTerm={searchTerm} setError={setError} />}
        {loading && <Loader />}
        {images.length > 0 && !endOfCollection && (
          <LoadMoreBtn onChange={handleLoadMore} />
        )}
        <ImageModal
          images={images}
          isOpen={isOpen}
          isClose={handleCloseModal}
          imageUrl={selectedImages}
        />
      </div>
    </main>
  );
};

export default MorePhotos;
