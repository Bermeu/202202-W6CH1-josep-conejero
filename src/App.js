import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./components/TaskItem/TaskItem";
import tasksAPI from "./data/tasksAPI";
import { loadTasks } from "./redux/actions/actionCreator";

function App() {
  const dispatch = useDispatch();
  const todosTasks = useSelector((state) => {
    return state.todosTasks;
  });
  useEffect(() => {
    dispatch(loadTasks(tasksAPI));
  }, [dispatch]);

  //debugger;

  return (
    <ul className="task-list">
      {todosTasks.map((task) => (
        <TaskItem key={task.id} taskText={task.taskText} />
      ))}
    </ul>
  );
}

export default App;
