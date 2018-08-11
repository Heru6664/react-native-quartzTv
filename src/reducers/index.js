import { combineReducers } from "redux";

import list from "./list";
import SearchResult from "./Search";
import details from "./details";

const app = combineReducers({
  list,
  details,
  SearchResult
});

export default app;
