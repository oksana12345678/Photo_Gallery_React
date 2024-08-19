import DescList from "../DescList/DescList";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import TitleAndDesc from "../TitleAndDesc/TitleAndDesc";
import css from "./AboutUsSection.module.css";

const AboutUsSection = ({ items }) => {
  return (
    <section>
      <div className={css.containerAbout}>
        <TitleAndDesc />
        <DescList />
      </div>
      <PhotoGallery items={items} />
    </section>
  );
};

export default AboutUsSection;
