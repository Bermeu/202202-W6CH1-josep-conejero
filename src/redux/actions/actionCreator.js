import actionTypes from "./actionTypes";

export const loadTasks = (tasks) => ({
  type: actionTypes.loadTasks,
  articles: tasks,
});
