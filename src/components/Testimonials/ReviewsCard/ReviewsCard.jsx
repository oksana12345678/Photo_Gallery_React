import css from "./ReviewsCard.module.css";
const ReviewsCard = ({ avatar, author, review }) => {
  return (
    <div>
      <div className={css.avatarTitle}>
        <div className={css.container}>
          <img className={css.avatar} src={avatar} alt="Photo" />
          <h3 className={css.title}>{author}</h3>
        </div>
      </div>
      <p className={css.review}>{review}</p>
    </div>
  );
};
export default ReviewsCard;
