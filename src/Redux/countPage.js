import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  countVal: 10,
};

const countPage = createSlice({
  name: "countPage",
  initialState,
  reducers: {
    changeValue(state, action) {
      state.countVal = action.payload.countVal;
    },
  },
});

export const CountValAction = countPage.actions;
export default countPage.reducer;
