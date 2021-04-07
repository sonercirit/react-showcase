import store from "./redux";

export default function getData() {
  const state = store.getState();
  return state.entries.filter((val) => val.releaseYear >= 2010).splice(0, 21);
}
