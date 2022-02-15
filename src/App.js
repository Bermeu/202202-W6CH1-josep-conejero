import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TasksList from "./components/TasksList/TasksList";
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

  return <TasksList className="TodosContainer" tasksList={todosTasks} />;
}

export default App;
