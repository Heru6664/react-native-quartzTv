import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_FAILED,
  SEARCH_MOVIE_SUCCESS
} from "../actions/constant/Search";

const initialState = {
  loading: false,
  result: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return {
        ...state,
        loading: true
      };
    case SEARCH_MOVIE_FAILED:
      return {
        ...state,
        loading: false
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        result: action.payload
      };
    default:
      return state;
  }
};
