import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../components/Data/Data";

export const crudSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
  },
});

export const { addUser } = crudSlice.actions;
export default crudSlice.reducer;
