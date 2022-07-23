import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newReducer from "../features/newSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newReducer,
  },
});
