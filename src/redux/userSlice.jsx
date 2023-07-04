import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "Anna",
    email: "john@gmail.com",
  },
  pending: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateStart: (state) => {
      state.pending = true
    },
    updateSuccess: (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    },
    updateError: (state) => {
      state.error = true
      state.pending = false
    }
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // remove: (state) => {
    //   state.name = null;
    //   state.email = null;
    // },
    // addHello: (state, action) => {
    //   state.name = "Hello" + action.payload
    // }
  },
});

export const selectedUser = (state) => state.user.userInfo;
export const selectedUserName = (state) => state.user.userInfo.name;
export const selectedUserEmail = (state) => state.user.userInfo.email;
// export const { update, remove, addHello } = userSlice.actions;
export const { updateStart, updateSuccess, updateError} = userSlice.actions
export default userSlice.reducer;