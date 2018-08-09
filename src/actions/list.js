import { ADD_MOVIE_LIST } from "./constant/list";

export const addMovieList = data => ({
  type: ADD_MOVIE_LIST,
  payload: data
});
