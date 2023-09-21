import { createSlice } from "@reduxjs/toolkit";

const currentIndexSlice = createSlice({
  name: "index",
  initialState: 0,
  reducers: {
    indexChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const indexReducer = currentIndexSlice.reducer;
export const { indexChange } = currentIndexSlice.actions;
