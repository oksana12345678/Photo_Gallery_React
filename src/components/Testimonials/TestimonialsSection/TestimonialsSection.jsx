import ListOfReviews from "../ListOfReviews/ListOfReviews";
import TestimonialsTitle from "../TestimonialsTitle/TestimonialsTitle";
import css from "./TestimonialsSection.module.css";

const TestimonialsSection = ({ reviews }) => {
  return (
    <section className={css.testimonials}>
      <TestimonialsTitle />
      <ListOfReviews reviews={reviews} />
    </section>
  );
};

export default TestimonialsSection;
