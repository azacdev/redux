import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "https://localhost:8800/api/users/1/update",
    user
  );
  return res.data
});

const initialState = {
  userInfo: {
    name: "Anna",
    email: "john@gmail.com",
  },
  pending: null,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
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
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null
      state.error = true
    },
  }
});

export const selectedUser = (state) => state.user.userInfo;
export const userPending = (state) => state.user.pending;
export const userError = (state) => state.user.error;
export const selectedUserName = (state) => state.user.userInfo.name;
export const selectedUserEmail = (state) => state.user.userInfo.email;
export const { update, remove, addHello } = userSlice.actions;
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
