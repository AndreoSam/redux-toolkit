import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { post_api } from "../../Api/Api_url";

let api_url = post_api;

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const res = await axios.get(api_url);
  console.log("Axios response for posts api: ", res);
  return res?.data;
});

const initial_value = {
  isLoading: false,
  postValue: [],
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState: initial_value,
  //work as middleware for handling asynchronous action

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("Action for fulfilled", action);
      state.isLoading = false;
      state.postValue = action.payload;
      state.error = null;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log("Action for rejected", action);
      state.isLoading = false;
      state.postValue = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
