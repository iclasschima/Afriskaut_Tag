import { combineReducers } from "redux";
import competition from "./competition";
import team from "./team"
import match from "./match"
import auth from "./auth"

const rootReducer = combineReducers({
  competition,
  team,
  match,
  auth
});

export default rootReducer;
