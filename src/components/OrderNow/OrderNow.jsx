import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./OrderNow.module.css";
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { postBooking } from "../../redux/booking/operations";
import showToast from "../showToast";
import { dateSelector, errorSelector } from "../../redux/booking/selectors";
import CalendarDate from "../commons/CalendarDate/CalendarDate";
import { useState } from "react";
import moment from "moment";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().email("Incorrect email!").required("Email is required!"),
  number: Yup.string().required("Phone number is required!"),
  sessionType: Yup.string().required("Type og photo session required!"),
});

const initialValues = {
  name: "",
  email: "",
  number: "",
  sessionType: "",
  date: "",
  time: "",
  location: "",
  message: "",
};
const OrderNow = ({ close }) => {
  const dispatch = useDispatch();

  const [hour, setHour] = useState("");
  const [day, setDay] = useState("");
  const sendError = useSelector(errorSelector);
  const datesSelector = useSelector(dateSelector);
  const [isOther, setIsOther] = useState(false);

  const formattedDay = day
    ? moment(day).utcOffset(0, true).format("YYYY-MM-DDTHH:mm:ss.SSSZ")
    : "";

  const availableDates = datesSelector.map((item) => {
    const d = new Date(item.date);
    const freeHours = item.time.filter((t) => t.booked === false);

    return {
      date: `${d.getFullYear()}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`,
      freeHours: freeHours.map((t) => t.hour),
    };
  });

  const handleSubmit = (values, action) => {
    if (!day || !hour) {
      showToast("Please select date and time", "error");
      return;
    }

    const { name, email, number, sessionType, location, message, otherType } =
      values;

    const bookingData = {
      name,
      email,
      phone: number,
      photoSessions: sessionType
        ? sessionType === "other"
          ? otherType
          : sessionType
        : otherType,
      sessionDate: formattedDay,
      time: hour,
      location,
      comment: message,
    };

    dispatch(postBooking({ data: bookingData }));
    action.resetForm();
    close();

    if (!sendError) {
      showToast("Booking request sent!", "success");
    } else if (sendError) {
      showToast("Already exist ", "error");
    }
  };

  return (
    <div className={css.formContainer}>
      <div className={css.blur}>
        <button className={css.button} onClick={close}>
          <RiCloseLargeFill className={css.icon} />
        </button>
        <h2 className={css.title}>Book a photo session</h2>
        <CalendarDate
          booked={availableDates}
          setHour={setHour}
          setDay={setDay}
          selectedHour={hour}
        />
        {hour && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
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
                    <Field
                      as="select"
                      name="sessionType"
                      className={css.input}
                      onChange={(e) => {
                        const value = e.target.value;
                        setIsOther(value === "other");
                        setFieldValue("sessionType", value);
                      }}
                    >
                      <option value="" disabled hidden>
                        Choose a type
                      </option>
                      <option value="wedding">Wedding photo session</option>
                      <option value="portrait">Portrait photo session</option>
                      <option value="family">Family photo session</option>
                      <option value="event">Shooting events</option>
                      <option value="other">Other</option>
                    </Field>
                    {isOther && (
                      <Field
                        type="text"
                        name="otherType"
                        placeholder="Enter your own type"
                        className={css.input}
                      />
                    )}
                    <ErrorMessage
                      name="sessionType"
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
                    Book
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}{" "}
      </div>
    </div>
  );
};

export default OrderNow;
