import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice.js";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
