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

const filteredFeed = filterFeed();

function sort(key: string, array: any) {
  switch (key) {
    case "yearAsc":
      return array.sort((a: any, b: any) => a.releaseYear - b.releaseYear);
    case "yearDesc":
      return array.sort((a: any, b: any) => b.releaseYear - a.releaseYear);
    case "titleAsc":
      return array.sort((a: any, b: any) => a.title > b.title);
    case "titleDesc":
      return array.sort((a: any, b: any) => b.title > a.title);
    default:
      throw Error("wrong key");
  }
}

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    ...filteredFeed,
    displayedSeries: filteredFeed.series,
    displayedMovies: filteredFeed.movies,
  },
  reducers: {
    search: (state, action) => {
      switch (action.payload.type) {
        case "movies":
          state.displayedMovies = state.movies.filter((val) =>
            val.title
              .toLowerCase()
              .includes(action.payload.string.toLowerCase())
          );
          break;
        case "series":
          state.displayedSeries = state.series.filter((val) =>
            val.title
              .toLowerCase()
              .includes(action.payload.string.toLowerCase())
          );
          break;
        default:
          throw Error("invalid type");
      }
    },
    sort: (state, action) => {
      switch (action.payload.type) {
        case "movies":
          state.displayedMovies = sort(
            action.payload.key,
            state.displayedMovies.slice()
          );
          break;
        case "series":
          state.displayedSeries = sort(
            action.payload.key,
            state.displayedSeries.slice()
          );
          break;
        default:
          throw Error("invalid type");
      }
    },
  },
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
