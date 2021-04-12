import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import CustomSelect from "../customSelect";
import "./index.css";
import { feedSlice } from "../../data/redux";

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

export function inputOnChange(event: any, dispatch: any, type: any) {
  const val = event.target.value;

  if (val.length >= 3 || val.length === 0)
    dispatch(feedSlice.actions.search({ type, string: val }));
}

export default function Filter() {
  const dispatch = useDispatch();
  const type = useSelector((val: any) => val.main.type);

  return (
    <div className="bodyTop">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          className="searchTerm lightShadow"
          onChange={(event) => {
            inputOnChange(event, dispatch, type);
          }}
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
