import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./OrderNow.module.css";
import { RiCloseLargeFill } from "react-icons/ri";

const OrderNow = ({ close }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Incorrect email").required("Email is required!"),
    number: Yup.string().required("Phone number is required"),
    sessionType: Yup.string().required("Choose photo session type!"),
    date: Yup.date().required("Date is required"),
    location: Yup.string().required("The location is required!"),
  });

  const initialValues = {
    name: "",
    email: "",
    number: "",
    sessionType: "",
    date: "",
    location: "",
    message: "",
  };

  const handleSubmit = (values, action) => {
    const { name, email, number, sessionType, date, location, message } =
      values;
    console.log(name, email, number, sessionType, date, location, message);
    action.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <div className={css.blur}>
        <button className={css.button} onClick={close}>
          <RiCloseLargeFill className={css.icon} />
        </button>
        <h2 className={css.title}>Book a photo session</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <div className={css.container}>
              <div className={css.inputContainer}>
                <label>Name</label>
                <Field
                  className={css.input}
                  type="text"
                  name="name"
                  placeholder="John Dow"
                />
                <ErrorMessage
                  name="name"
                  className={css.error}
                  component={"span"}
                />
              </div>
              <div className={css.inputContainer}>
                <label>Email </label>
                <Field
                  className={css.input}
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />

                <ErrorMessage
                  name="email"
                  className={css.error}
                  component={"span"}
                />
              </div>
              <div className={css.inputContainer}>
                <label>Phone</label>
                <Field
                  className={css.input}
                  type="tel"
                  name="number"
                  placeholder="XXXXXXXXXX"
                />

                <ErrorMessage
                  name="number"
                  className={css.error}
                  component={"span"}
                />
              </div>
              <div className={css.inputContainer}>
                <label>Type og photo session</label>
                <Field as="select" name="sessionType" className={css.input}>
                  <option value="">Choose a type</option>
                  <option value="wedding">Wedding photo session</option>
                  <option value="portrait">Portrait photo session</option>
                  <option value="family">Family photo session</option>
                  <option value="event">Shooting events</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="sessionType"
                  className={css.error}
                  component={"span"}
                />
              </div>

              <div className={css.inputContainer}>
                <label>Photo session date </label>
                <Field className={css.input} type="date" name="date" />
                <ErrorMessage
                  name="date"
                  className={css.error}
                  component={"span"}
                />
              </div>

              <div className={css.inputContainer}>
                <label>Location of the photo session</label>
                <Field
                  className={css.input}
                  type="text"
                  name="location"
                  placeholder="Add location"
                />
                <ErrorMessage
                  name="location"
                  className={css.error}
                  component={"span"}
                />
              </div>

              <div className={css.inputContainer}>
                <label>Additional wishes</label>
                <Field
                  className={css.inputTextArea}
                  as="textarea"
                  name="message"
                  placeholder="Your wishes"
                />
              </div>
              <button className={css.buttonSubmit} type="submit">
                Send
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default OrderNow;
