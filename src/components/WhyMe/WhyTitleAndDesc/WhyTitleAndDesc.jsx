import css from "./WhyTitleAndDesc.module.css";
import data from "../data/why_me_data.json";

const WhyTitleAndDesc = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{data.main_title}</h2>
      <p className={css.desc}>{data.main_desc}</p>
    </div>
  );
};
export default WhyTitleAndDesc;
