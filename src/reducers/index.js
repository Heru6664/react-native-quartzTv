import { combineReducers } from "redux";

import list from "./list";
import SearchResult from "./Search";

const app = combineReducers({
  list,
  SearchResult
});

export default app;
