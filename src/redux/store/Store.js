import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "../slice/counterSlice";
// import postReducer from "../slice/PostSlice";
import crudSlice from "../slice/CrudSlice";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // posts: postReducer,
    user: crudSlice,
  },
});
export default store;
