import { createSlice } from "@reduxjs/toolkit";

const sortByOptionSlice = createSlice({
  name: "sortByOption",
  initialState: {
    label: "Sort by data",
    text: "Date",
    type: "date",
    order: "asc",
  },
  reducers: {
    setSortByOption: (_, { payload }) => payload,
  },
});

export const { setSortByOption } = sortByOptionSlice.actions;

export const sortByOptionReducer = sortByOptionSlice.reducer;
