import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./FormAndAgree.module.css";

const FormAndAgree = () => {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Get more info other discount prices </h1>
      <Formik>
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <label className={css.visuallyHidden}>enter your email</label>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <ErrorMessage
              className={css.error}
              name="email"
              component={"span"}
            />
          </div>
          <button className={css.button} type="submit">
            submit
          </button>
        </Form>
      </Formik>
      <p className={css.policy}>
        *By clicking “Submit” button, you agree to our Terms and that you have
        read our Data Use Policy.
      </p>
    </div>
  );
};
export default FormAndAgree;
