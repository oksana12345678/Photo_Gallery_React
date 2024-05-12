import css from "./DescList.module.css";

const DescList = () => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <div className={css.container}>
          <h3 className={css.title}>+10 years</h3>
          <p className={css.desc}>experience</p>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.container}>
          <h3 className={css.title}>+450</h3>
          <p className={css.desc}>customers</p>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.container}>
          <h3 className={css.title}>+15K</h3>
          <p className={css.desc}>portfolio photos</p>
        </div>
      </li>
    </ul>
  );
};
export default DescList;
