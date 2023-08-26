import React from "react";

import Task from "./Task";

const initialTaskList = [{ name: "Learn React", isDone: false }];

export default function TaskList() {
  return (
    <div className="tasklist">
      <h1>TaskList</h1>
      {initialTaskList.map((task, i) => (
        <Task task={task} key={i} />
      ))}
    </div>
  );
}
