import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

configureStore({
  reducer: {
    userState: userReducer,
  },
});
