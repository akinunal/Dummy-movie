import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", (param) => {
  return axios
    .get(`https://fake-movie-database-api.herokuapp.com/api?s=${param}`)
    .then((response) => response.data);
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload?.Search?.map((movie) => {
        return {
          ...movie,
          description: "Test",
        };
      });
      state.error = "";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error.message;
    });
  },
});

export default moviesSlice.reducer;
