import Task from "./Task";

export default function TaskList({ taskList, setTaskList }) {
  return (
    <div className="tasklist">
      <header>
        <h1>TaskList</h1>
        <button>+</button>
      </header>
      <ul>
        {taskList.map((task, i) => (
          <Task task={task} key={i} setTaskList={setTaskList} />
        ))}
      </ul>
    </div>
  );
}
