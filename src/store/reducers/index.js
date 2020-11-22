import { combineReducers } from "redux";
import competition from "./competition";
import team from "./team"

const rootReducer = combineReducers({
  competition,
  team,
});

export default rootReducer;
