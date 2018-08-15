import { ADD_MOVIE_LIST, REMOVE_MOVIE } from "./constant/list";

export const addMovieList = data => ({
  type: ADD_MOVIE_LIST,
  payload: data
});

export const removeMovie = index => ({
  type: REMOVE_MOVIE,
  payload: index
});
