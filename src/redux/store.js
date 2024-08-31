import campersReducer from "./campersSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
  },
});
