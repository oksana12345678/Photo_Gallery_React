import { useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import css from "./SessionSchedule.module.css";
import "react-calendar/dist/Calendar.css";
import OrderNow from "../../OrderNow/OrderNow";

const SessionSchedule = ({ showCalendar, onClose }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`${css.container} ${showCalendar ? css.open : ""}`}>
      <div className={css.calendarContainer} ref={calendarRef}>
        <OrderNow close={onClose} />
      </div>
    </div>
  );
};

export default SessionSchedule;
