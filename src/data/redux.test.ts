import { configureStore } from "@reduxjs/toolkit";
import { feedSlice, mainSlice } from "./redux";

const storeCreator = () =>
  configureStore({
    reducer: { feed: feedSlice.reducer, main: mainSlice.reducer },
  });

describe("redux", () => {
  it("should search movie", () => {
    const store = storeCreator();
    store.dispatch(
      feedSlice.actions.search({ type: "movies", string: "undeR" })
    );
    const res = store.getState();
    expect(res.feed.displayedMovies.length).toEqual(1);
    expect(res.feed.displayedMovies[0].title).toEqual("Under The Gun");
  });

  it("should search series", () => {
    const store = storeCreator();
    store.dispatch(
      feedSlice.actions.search({ type: "series", string: " sAUL" })
    );
    const res = store.getState();
    expect(res.feed.displayedSeries.length).toEqual(1);
    expect(res.feed.displayedSeries[0].title).toEqual("Better Call Saul");
  });

  it("should sort series year asc", () => {
    const store = storeCreator();
    store.dispatch(feedSlice.actions.sort({ type: "series", key: "yearAsc" }));
    const res = store.getState();
    expect(res.feed.displayedSeries[0].releaseYear).toEqual(2010);
  });

  it("should sort series year desc", () => {
    const store = storeCreator();
    store.dispatch(feedSlice.actions.sort({ type: "series", key: "yearDesc" }));
    const res = store.getState();
    expect(res.feed.displayedSeries[0].releaseYear).toEqual(2016);
  });

  it("should sort movies year desc", () => {
    const store = storeCreator();
    store.dispatch(feedSlice.actions.sort({ type: "movies", key: "yearDesc" }));
    const res = store.getState();
    expect(res.feed.displayedMovies[0].releaseYear).toEqual(2016);
  });
});
