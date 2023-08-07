import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: "All",
  reducers: {
    setCategory: (_, { payload }) => payload,
  },
});

export const { setCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
