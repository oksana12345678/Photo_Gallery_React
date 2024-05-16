import css from "./SortedBy.module.css";

const SortedBy = ({ onSearch, swiperId }) => {
  const handleClick = (searchWord) => {
    onSearch(searchWord, swiperId);
  };
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <button className={css.button} onClick={() => handleClick("all")}>
            all
          </button>
        </li>
        <li className={css.listItem}>
          <button className={css.button} onClick={() => handleClick("wedding")}>
            wedding
          </button>
        </li>
        <li className={css.listItem}>
          <button className={css.button} onClick={() => handleClick("product")}>
            product
          </button>
        </li>
        <li className={css.listItem}>
          <button className={css.button} onClick={() => handleClick("food")}>
            food
          </button>
        </li>
        <li className={css.listItem}>
          <button className={css.button} onClick={() => handleClick("fashion")}>
            fashion
          </button>
        </li>
      </ul>
    </div>
  );
};
export default SortedBy;
