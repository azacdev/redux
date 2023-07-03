import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Anna",
  email: "john@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => {
      state.name = null;
      state.email = null;
    },
    // addHello: (state, action) => {
    //   state.name = "Hello" + action.payload
    // }
  },
});

export const selectedUser = (state) => state.user;
export const selectedUserName = (state) => state.user.name;
export const selectedUserEmail = (state) => state.user.email;
export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;
