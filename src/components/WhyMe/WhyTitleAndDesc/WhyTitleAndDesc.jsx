import css from "./WhyTitleAndDesc.module.css";

const WhyTitleAndDesc = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>why me</h2>
      <p className={css.desc}>
        Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna
        quisque blandit turpis ultrices arcu ut sed.
      </p>
    </div>
  );
};
export default WhyTitleAndDesc;
