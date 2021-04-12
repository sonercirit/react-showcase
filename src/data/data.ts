import store from "./redux";

export default function getData() {
  const state = store.getState();
  return state.feed.series
    .filter((val) => val.releaseYear >= 2010)
    .splice(0, 21);
}
