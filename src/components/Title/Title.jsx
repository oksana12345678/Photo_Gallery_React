import css from "./Title.module.css";

const Title = ({ children }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{children}</h1>
    </div>
  );
};
export default Title;
