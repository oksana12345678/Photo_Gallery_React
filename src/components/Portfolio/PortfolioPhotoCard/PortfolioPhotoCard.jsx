import css from "./PortfolioPhotoCard.module.css";

const PhotoCard = ({ small, description }) => {
  return <img className={css.image} src={small} alt={description} />;
};
export default PhotoCard;
