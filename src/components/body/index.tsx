import React from "react";
import "./index.css";
import "../common.css";
import Filter from "../Filter";

export default function Body({ showFilter = false }: any) {
  return (
    <div className="content max">
      {showFilter ? <Filter /> : null}
      <div className="posterContainer">Placeholder</div>
    </div>
  );
}
