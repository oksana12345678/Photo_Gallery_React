import { useState, useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import css from "./SessionSchedule.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RiCloseLargeFill } from "react-icons/ri";

const SessionSchedule = ({ showCalendar, onClose }) => {
  const [availableDates, setAvailableDates] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch("../../../../availableDates.json");
        const data = await response.json();
        setAvailableDates(data.dates);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchAvailableDates();
  }, []);

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

  const isDateAvailable = (date) => {
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    return availableDates.includes(formattedDate);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      return isDateAvailable(date) ? css.available : css.unavailable;
    }
    return null;
  };

  return (
    <div className={`${css.container} ${showCalendar ? css.open : ""}`}>
      <div className={css.calendarContainer} ref={calendarRef}>
        <button className={css.closeButton} onClick={onClose}>
          <RiCloseLargeFill className={css.icon} />
        </button>
        <h2 className={css.title}>Available dates for photo sessions</h2>
        <Calendar
          tileClassName={tileClassName}
          view="month"
          showNeighboringMonth={false}
        />
      </div>
    </div>
  );
};

export default SessionSchedule;
