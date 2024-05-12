import css from "./PhotoCard.module.css";

const PhotoCard = ({ small, description }) => {
  return (
    <div>
      <img src={small} alt={description} />
      <p>{description}</p>
    </div>
  );
};
export default PhotoCard;
