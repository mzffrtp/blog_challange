import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    userState: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
