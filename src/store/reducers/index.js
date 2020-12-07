import { combineReducers } from "redux";
import competition from "./competition";
import team from "./team"
import match from "./match"

const rootReducer = combineReducers({
  competition,
  team,
  match
});

export default rootReducer;
