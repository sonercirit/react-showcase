import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import CustomSelect from "../customSelect";
import "./index.css";

const dropdownOptions = [
  {
    label: "Sort by year in descending order",
    value: "year-desc",
    key: "year-desc",
  },
  {
    label: "Sort by year in ascending order",
    value: "year-asc",
    key: "year-asc",
  },
  {
    label: "Sort by title in descending order",
    value: "title-desc",
    key: "title-desc",
  },
  {
    label: "Sort by title in ascending order",
    value: "title-asc",
    key: "title-asc",
  },
];

export default function Filter() {
  return (
    <div className="bodyTop">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          className="searchTerm lightShadow"
        />
        <button
          className="blueBackground searchButton lightShadow"
          type="submit"
        >
          <SearchIcon className="searchIcon" />
        </button>
      </div>
      <div className="filler" />
      <div className="sortBar">
        <CustomSelect options={dropdownOptions} />
      </div>
    </div>
  );
}
