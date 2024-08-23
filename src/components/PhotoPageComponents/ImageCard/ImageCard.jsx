import css from "./ImageCard.module.css";

const ImageCard = ({ small, description, onClick }) => {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.listImage}
        src={small}
        alt={description || "image"}
        onClick={onClick}
      />
      <div className={css.descriptionImage}>
        {description ? <p className={css.desc}>{description}</p> : <p></p>}
      </div>
    </div>
  );
};
export default ImageCard;
