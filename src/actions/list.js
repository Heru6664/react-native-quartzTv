import { ADD_MOVIE_LIST, REMOVE_MOVIE } from "./constant/list";
import { store } from "../store";

export const addMovieList = data => ({
  type: ADD_MOVIE_LIST,
  payload: data
});

const removeMovieList = index => ({
  type: REMOVE_MOVIE,
  payload: index
});

export const removeMovie = data => dispatch => {};
