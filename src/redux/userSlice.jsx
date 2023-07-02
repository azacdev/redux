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
  },
});

export const selectedUserName = state => state.user.name
export const selectedUserEmail = state => state.user.email
export const { update } = userSlice.actions;
export default userSlice.reducer;