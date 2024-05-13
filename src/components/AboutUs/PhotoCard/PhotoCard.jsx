import css from "./PhotoCard.module.css";

const PhotoCard = ({ small, description }) => {
  return (
    <div>
      <img className={css.image} src={small} alt={description} />
    </div>
  );
};
export default PhotoCard;
