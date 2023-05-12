import { createAction, createSlice } from "@reduxjs/toolkit";

let initialState = {
  users: [],
};

export const addUser = createAction("user/addUser");
export const editUser = createAction("user/editUser");
export const deleteUser = createAction("user/deleteUser");

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser, (state, action) => {
      action.payload.id = state.users.length + 1;
      state.users.push(action.payload);
    });
    builder.addCase(editUser, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
    builder.addCase(deleteUser, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
  },
});

export const getUsers = (state) => state.user.users;
export const getUserById = (id) => (state) =>
  state.user.users.find((user) => user.id === id);

export default userSlice.reducer;
