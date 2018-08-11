import { GET_MOVIE_DETAILS } from "../actions/constant/details";

const initialState = {
  movieDetails: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload
      };

    default:
      return state;
  }
};
