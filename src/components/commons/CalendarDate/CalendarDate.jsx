import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import css from "./CalendarDate.module.css";
import MyToolbar from "./Toolbar";
const localizer = momentLocalizer(moment);

const CalendarDate = ({ booked, setHour, setDay }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const bookedMap = new Map(
    booked.map((item) => [
      moment(item.date).format("YYYY-MM-DD"),
      item.freeHours,
    ])
  );

  const isFree = (date) => {
    const dateStr = moment(date).format("YYYY-MM-DD");
    return bookedMap.get(dateStr) || null;
  };

  const handleClickOnHourButton = (hour) => {
    setHour(hour);
  };

  return (
    <div className={css.calendarWrapper}>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={["month"]}
        toolbar={true}
        components={{
          toolbar: MyToolbar,
        }}
        className={css.calendar}
        selectable
        onSelectSlot={(slotInfo) => {
          setDay(slotInfo.start);
          const hours = isFree(slotInfo.start);
          if (hours)
            setSelectedDate({
              date: moment(slotInfo.start).format("YYYY-MM-DD"),
              freeHours: hours,
            });
          else setSelectedDate(null);
        }}
        onDrillDown={(date) => {
          setDay(date);
          const hours = isFree(date);
          if (hours) {
            setSelectedDate({
              date: moment(date).format("YYYY-MM-DD"),
              freeHours: hours,
            });
          } else {
            setSelectedDate(null);
          }
        }}
        dayPropGetter={(date) => {
          const todayStr = moment().format("YYYY-MM-DD");
          const dateStr = moment(date).format("YYYY-MM-DD");
          const hours = isFree(date);

          if (dateStr < todayStr) return { className: "dayPast" };
          if (hours) return { className: "dayFree" };
          return { className: "dayBooked" };
        }}
      />

      {selectedDate && (
        <div>
          <div className={css.freeHoursWrapper}>
            {selectedDate.freeHours.map((hour) => (
              <button
                key={hour}
                className={css.hourButton}
                onClick={() => handleClickOnHourButton(hour)}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDate;
