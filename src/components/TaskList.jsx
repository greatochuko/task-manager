import Task from "./Task";

export default function TaskList({
  taskList,
  setTaskList,
  setView,
  setTaskObj,
}) {
  function handleCreate() {
    setView("create");
    setTaskObj(null);
  }
  return (
    <div className="tasklist">
      <header>
        <h2>TaskList</h2>
        <button onClick={handleCreate}>+</button>
      </header>
      <ul>
        {taskList.map((task, i) => (
          <Task
            task={task}
            key={i}
            setTaskList={setTaskList}
            setView={setView}
            setTaskObj={setTaskObj}
          />
        ))}
      </ul>
    </div>
  );
}
