import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  catVal: 1,
};

const categotyValue = createSlice({
  name: "categotyValue",
  initialState,
  reducers: {
    changeValue(state, action) {
      state.catVal = action.payload.catVal;
    },
  },
});

export const CatValAction = categotyValue.actions;
export default categotyValue.reducer;
