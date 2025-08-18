import { useState } from "react";
import css from "./SortedBy.module.css";
import filters from "./data.json";

const SortedBy = ({ onSearch, swiperId }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleClick = (searchWord) => {
    setActiveFilter(searchWord);
    onSearch(searchWord, swiperId);
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filters.map((filter) => (
          <li className={css.listItem} key={filter}>
            <button
              className={`${css.button} ${
                activeFilter === filter ? css.active : ""
              }`}
              onClick={() => handleClick(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortedBy;
