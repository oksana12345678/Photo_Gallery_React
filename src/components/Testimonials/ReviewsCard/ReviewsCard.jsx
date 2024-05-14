import css from "./ReviewsCard.module.css";
const ReviewsCard = ({ avatar, author, review }) => {
  return (
    <div>
      <img src={avatar} alt="Photo" />
      <div>
        <h3>{author}</h3>
        <p></p>
      </div>
    </div>
  );
};
export default ReviewsCard;
