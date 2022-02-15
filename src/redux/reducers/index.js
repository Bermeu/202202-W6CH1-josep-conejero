import { combineReducers } from "redux";
import tasksReducer from "./sentenceWordsReducer";

const rootReducer = combineReducers({
  todosTasks: tasksReducer,
});

export default rootReducer;

// aquí estarán todos los reducers
