import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onChange }) => {
  return (
    <div className={css.container}>
      <button className={css.loadMore} onClick={onChange}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
