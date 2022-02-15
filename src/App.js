import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todosTasks = useSelector((state) => {
    return state.todosTasks;
  });
  return <div className="TodosContainer"></div>;
}

export default App;
