import { ADD_MOVIE_LIST } from "../actions/constant/list";

const initialState = {
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_LIST:
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      };
    default:
      return state;
  }
};
