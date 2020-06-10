import { combinReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combinReducers({
  todos,
  visibilityFilter
});
