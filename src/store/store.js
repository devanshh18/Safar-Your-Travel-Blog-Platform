import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth : authSlice,
    //TODO: Add the posts slice here
  },
});

export default store;
