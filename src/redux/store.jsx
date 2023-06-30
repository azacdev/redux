import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    // user: userReducer,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});

export default store