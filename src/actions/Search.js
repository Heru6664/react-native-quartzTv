import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILED
} from "./constant/Search";
import axios from "axios";

const searchStart = () => ({
  type: SEARCH_MOVIE_START
});
const searchSuccess = data => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload: data
});
const searchFailed = error => ({
  type: SEARCH_MOVIE_FAILED,
  payload: error
});

export const searchMovie = movies => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(searchStart());

    return axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=a750c101aa0aae0222a0767fec8f6c29&language=en-US&query=${movies}`
      )
      .then(res => {
        dispatch(searchSuccess(res.data));
        return resolve(res.data);
      })
      .catch(err => {
        dispatch(searchFailed(err));
        return reject(console.log(err));
      });
  });
};
