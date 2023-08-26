import { useState } from "react";
import Detail from "./Details";
import Menu from "./Menu";
import TaskList from "./TaskList";

const initialTaskList = [
  { name: "Learn React", description: "Watch youtube videos", isDone: false },
];

export default function App() {
  const [taskList, setTaskList] = useState(initialTaskList);
  const [view, setView] = useState("create");
  const [taskObj, setTaskObj] = useState(null);

  return (
    <div className="app">
      <Menu />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        setView={setView}
        setTaskObj={setTaskObj}
      />
      <Detail
        setTaskList={setTaskList}
        view={view}
        header={view === "create" ? "Create" : "Edit"}
        taskObj={taskObj}
      />
    </div>
  );
}
