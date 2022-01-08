import { configureStore } from "@reduxjs/toolkit";
import categoryValue from "./categoryValue";
import countPage from "./countPage";

const store = configureStore({
  reducer: {
    categoryValue: categoryValue,
    countPage: countPage,
  },
});

export default store;
