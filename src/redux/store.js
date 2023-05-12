import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import bookReducer from "./features/bookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
});

export default store;
