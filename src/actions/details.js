import { GET_MOVIE_DETAILS } from "./constant/details";

export const getMovieDetails = data => ({
  type: GET_MOVIE_DETAILS,
  payload: data
});
