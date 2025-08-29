import css from "./CalendarDate.module.css";

const MyToolbar = ({ label, onNavigate }) => {
  return (
    <div className={css.toolbar}>
      <button className={css.prev} onClick={() => onNavigate("PREV")}>
        ‹
      </button>
      <span className={css.monthName}>{label}</span>
      <button className={css.next} onClick={() => onNavigate("NEXT")}>
        ›
      </button>
    </div>
  );
};

export default MyToolbar;
