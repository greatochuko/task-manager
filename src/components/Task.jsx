import React from "react";

export default function Task({ task, setTaskList }) {
  function toggleIsDone() {
    setTaskList((curr) =>
      curr.map((currTask) =>
        task === currTask ? { ...currTask, isDone: !currTask.isDone } : currTask
      )
    );
  }

  function deleteTask() {
    setTaskList((curr) => curr.filter((currTask) => task !== currTask));
  }

  return (
    <li className={`task ${task.isDone ? "done" : ""}`}>
      <input type="checkbox" checked={task.isDone} onChange={toggleIsDone} />
      <p>{task.name}</p>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}
