import { createSlice, configureStore } from "@reduxjs/toolkit";
import feed from "./feed.json";

// disable reassign here since redux is immutable by default
/* eslint-disable no-param-reassign */

function filterFeed() {
  const movies = [];
  const series = [];

  for (let i = 0; i < feed.entries.length; i += 1) {
    const entry = feed.entries[i];

    if (entry.releaseYear >= 2010) {
      if (entry.programType === "movie") {
        movies.push(entry);
      } else if (entry.programType === "series") {
        series.push(entry);
      }
    }
  }
  return { movies, series };
}

const feedSlice = createSlice({
  name: "feed",
  initialState: filterFeed(),
  reducers: {},
});

export const mainSlice = createSlice({
  name: "main",
  initialState: { type: "home", showFilter: false, title: "Popular Titles" },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },
    changeFilter: (state, action) => {
      state.showFilter = action.payload;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { feed: feedSlice.reducer, main: mainSlice.reducer },
});

export default store;
