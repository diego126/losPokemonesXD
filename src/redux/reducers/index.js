import { combineReducers } from "redux";
import courses from "./courseReducer";
import professors from "./professorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  professors,
  apiCallsInProgress
});

export default rootReducer;
