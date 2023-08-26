import { useState } from "react";
import Detail from "./Details";
import Menu from "./Menu";
import TaskList from "./TaskList";

const initialTaskList = [{ name: "Learn React", isDone: false }];

export default function App() {
  const [taskList, setTaskList] = useState(initialTaskList);

  return (
    <div className="app">
      <Menu />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <Detail setTaskList={setTaskList} />
    </div>
  );
}
