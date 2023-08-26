import React from "react";

export default function Task({ task, setTaskList, setView, setTaskObj }) {
  function toggleIsDone() {
    setTaskList((curr) =>
      curr.map((currTask) =>
        task === currTask ? { ...currTask, isDone: !currTask.isDone } : currTask
      )
    );
  }

  function handleSetTaskObj() {
    setView("edit");
    setTaskObj(task);
  }

  function deleteTask() {
    setTaskList((curr) => curr.filter((currTask) => task !== currTask));
    setTaskObj(null);
  }

  return (
    <li
      className={`task ${task.isDone ? "done" : ""}`}
      onClick={handleSetTaskObj}
    >
      <input type="checkbox" checked={task.isDone} onChange={toggleIsDone} />
      <p>{task.name}</p>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}
