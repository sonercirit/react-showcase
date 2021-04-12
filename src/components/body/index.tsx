import React, { useState } from "react";
import "./index.css";
import "../common.css";
import Filter from "../Filter";
import placeholder from "../../assets/placeholder.png";

function getData(type: string) {
  switch (type) {
    case "home":
      return [
        {
          title: "Popular Series",
          img: placeholder,
          overText: "SERIES",
          key: "series",
        },
        {
          title: "Popular Movies",
          img: placeholder,
          overText: "MOVIES",
          key: "movies",
        },
      ];
    default:
      return [];
  }
}

function getDisplayed(type: string, setState: any) {
  const data = getData(type);

  return data.map((val) => (
    <div
      className="posterDiv"
      key={val.title}
      role="button"
      onClick={() => {
        setState({ type: val.key });
      }}
      tabIndex={0}
      onKeyPress={() => {}}
    >
      <div className="imgWrapper">
        <img className="poster" src={val.img} alt={val.title} />
        <h1 className="imgCaption">{val.overText}</h1>
      </div>
      <div className="posterTitle">{val.title}</div>
    </div>
  ));
}

export default function Body(props: any) {
  const [state, setState] = useState(props);

  return (
    <div className="content max">
      {state.showFilter ? <Filter /> : null}
      <div className="posterContainer">
        {getDisplayed(state.type, setState)}
      </div>
    </div>
  );
}
