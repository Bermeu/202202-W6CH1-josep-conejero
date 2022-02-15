import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  todosTasks: tasksReducer,
});

export default rootReducer;

// aquí estarán todos los reducers
