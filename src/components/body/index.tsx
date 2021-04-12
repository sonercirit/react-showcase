import React from "react";
import "./index.css";
import "../common.css";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter";
import placeholder from "../../assets/placeholder.png";
import { mainSlice } from "../../data/redux";

function handleType(type: string, dispatch: any, feed: any) {
  dispatch(mainSlice.actions.changeType(type));

  switch (type) {
    case "home":
      dispatch(mainSlice.actions.changeTitle("Popular Titles"));
      dispatch(mainSlice.actions.changeFilter(false));
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
    case "series":
      dispatch(mainSlice.actions.changeTitle("Popular Series"));
      dispatch(mainSlice.actions.changeFilter(true));
      return feed.series
        .map((val: any) => ({
          title: val.title,
          img: val.images["Poster Art"].url,
        }))
        .splice(0, 21);
    default:
      return [];
  }
}

function getDisplayed(type: string, dispatch: any, feed: any) {
  const data = handleType(type, dispatch, feed);

  return data.map((val: any) => (
    <div
      className="posterDiv"
      key={val.title}
      role="button"
      onClick={() => {
        if (val.overText) dispatch(mainSlice.actions.changeType(val.key));
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

export default function Body() {
  const feed = useSelector((val: any) => val.feed);
  const state = useSelector((val: any) => val.main);
  const dispatch = useDispatch();

  return (
    <div className="content max">
      {state.showFilter ? <Filter /> : null}
      <div className="posterContainer">
        {getDisplayed(state.type, dispatch, feed)}
      </div>
    </div>
  );
}
