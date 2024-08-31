import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";
import { selectFilter } from "./filterSlice.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});
const selectCampers = (state) => state.campers.items;
export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    return campers.filter((camper) =>
      camper.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default campersSlice.reducer;
