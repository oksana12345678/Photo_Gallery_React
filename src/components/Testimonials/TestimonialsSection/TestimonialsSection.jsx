import { useEffect, useState } from "react";
import ListOfReviews from "../ListOfReviews/ListOfReviews";
import TestimonialsTitle from "../TestimonialsTitle/TestimonialsTitle";
import css from "./TestimonialsSection.module.css";
import fetchReviews from "../../fetchReviews/fetchReviews";

const TestimonialsSection = ({ setError }) => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setError(false);
        const data = await fetchReviews();
        setReviews(data);
      } catch (error) {
        setError(true);
      }
    };
    getReviews();
  }, [setReviews, setError]);

  return (
    <section className={css.testimonials}>
      <TestimonialsTitle />
      <ListOfReviews reviews={reviews} />
    </section>
  );
};

export default TestimonialsSection;
