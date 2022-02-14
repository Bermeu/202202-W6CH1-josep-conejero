import actionTypes from "../actions/actionTypes";

const tasksReducer = (currentTasks = [], action = {}) => {
  let newTasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    default:
      newTasks = [...currentTasks];
  }

  return newTasks;
};

export default tasksReducer;
