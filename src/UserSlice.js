import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { signup, login } = userSlice.actions;
export const allUsers = (state) => state.user.users;

export default userSlice.reducer;
