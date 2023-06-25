import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import albumReducer from "./albumSlice";

const store = configureStore({
  reducer: {
    userState: userReducer,
    albumState: albumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
