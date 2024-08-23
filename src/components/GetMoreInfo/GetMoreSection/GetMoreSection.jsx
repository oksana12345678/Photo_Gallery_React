import GetMoreWindow from "../GetMoreWindow/GetMoreWindow";
import css from "./GetMoreSection.module.css";

const GetMoreSection = () => {
  return (
    <section className={css.getMore} id="contact">
      <GetMoreWindow />
    </section>
  );
};

export default GetMoreSection;
