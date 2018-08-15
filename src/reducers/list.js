import { ADD_MOVIE_LIST, REMOVE_MOVIE } from "../actions/constant/list";

const initialState = {
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_LIST:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, action.payload),
          ...state.movies.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
};
