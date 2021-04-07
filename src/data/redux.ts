import { createSlice, configureStore } from "@reduxjs/toolkit";
import feed from "./feed.json";

const feedSlice = createSlice({
  name: "feed",
  initialState: feed,
  reducers: {},
});

const store = configureStore({
  reducer: feedSlice.reducer,
});

export default store;
