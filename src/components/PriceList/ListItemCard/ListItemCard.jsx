import css from "./ListItemCrd.module.css";

const ListItemCard = ({
  name,
  cost,
  duration,
  photos,
  retouching,
  finish,
  toggleCalendar,
}) => {
  return (
    <div className={css.mainContainer}>
      <div className={css.titleContainer}>
        <h3 className={css.title}>{name}</h3>
        <p className={css.cost}>{cost}</p>
      </div>
      <div className={css.descContainer}>
        <div className={css.desc}>
          <p className={css.descItem}>Duration</p>
          <p className={css.descCost}>{duration}</p>
        </div>
        <div className={css.desc}>
          <p className={css.descItem}>Lots Of Photos</p>
          <p className={css.descCost}>{photos}</p>
        </div>
        <div className={css.desc}>
          <p className={css.descItem}>Detailed Retouching</p>
          <p className={css.descCost}>{retouching}</p>
        </div>
        <div className={css.desc}>
          <p className={css.descItem}>Finishing</p>
          <p className={css.descCost}>{finish}</p>
        </div>
      </div>
      <button className={css.button} type="button" onClick={toggleCalendar}>
        Photo Session Schedule
      </button>
    </div>
  );
};
export default ListItemCard;
