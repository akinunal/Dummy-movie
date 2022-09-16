import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersSlice from "../features/users/usersSlice";
import moviesSlice from "../features/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice,
    movies: moviesSlice,
  },
});
