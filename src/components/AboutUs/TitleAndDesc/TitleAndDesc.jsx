import css from "./TitleAndDesc.module.css";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
const TitleAndDesc = () => {
  return (
    <div className={css.aboutContainer}>
      <div className={css.arrow}>
        <h2 className={css.title}>about us</h2>
        <LiaLongArrowAltDownSolid className={css.icon} />
      </div>
      <p className={css.desc}>
        Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna
        quisque blandit turpis ultrices arcu ut sed. Ultricies diam est aliquet
        porta fermentum molestie morbi libero. Ultrices sit in elit eget nullam
        sem. Urna velit imperdiet habitant in.
      </p>
    </div>
  );
};
export default TitleAndDesc;
