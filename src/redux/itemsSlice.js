import { createSlice } from "@reduxjs/toolkit";

const myItemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    addComment(state, action) {
      const { index } = action.payload;
      state[index].comments.push({
        text: action.payload.text,
        id: action.payload.id,
        color: action.payload.color,
      });
    },
  },
});

export const itemsReducer = myItemsSlice.reducer;
export const { add, remove, addComment } = myItemsSlice.actions;
