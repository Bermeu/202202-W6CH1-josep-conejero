const TaskItem = ({ task: { name, done } }) => {
  return (
    <>
      <li className={`list-item ${done ? "" : "done"}`}>{name}</li>
      <a className="delete" href="delete">
        X
      </a>
    </>
  );
};
export default TaskItem;
