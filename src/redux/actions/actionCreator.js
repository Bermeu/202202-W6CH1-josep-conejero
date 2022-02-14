import actionTypes from "./actionTypes";

export const loadTasks = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks: tasks,
});
