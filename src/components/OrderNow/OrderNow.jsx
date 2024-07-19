import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./OrderNow.module.css";
const OrderNow = () => {
  return (
    <Formik>
      <Form>
        <div className={css.input}>
          <Field type="text" name="name" />
          <ErrorMessage name="name" className={css.error} component={"span"} />
        </div>
        <div className={css.input}>
          <Field type="email" name="email" />
          <ErrorMessage name="email" className={css.error} component={"span"} />
        </div>
        <div className={css.input}>
          <Field type="tel" name="number" />
          <ErrorMessage
            name="number"
            className={css.error}
            component={"span"}
          />
        </div>
      </Form>
    </Formik>
  );
};
export default OrderNow;
