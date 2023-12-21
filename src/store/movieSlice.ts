import { createSlice } from "@reduxjs/toolkit";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieSliceType {
  movies: MovieDataType[];
}

const initialState: MovieSliceType = {
  movies: localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies")!)
    : moviesData,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (action.payload === movie.id)
          movie.isBookmarked = !movie.isBookmarked;
        return movie;
      });
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
  },
});

export default movieSlice.reducer;
export const movieActions = movieSlice.actions;
