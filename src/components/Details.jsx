import React, { useEffect, useState } from "react";

export default function Detail({ setTaskList, header, view, taskObj }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const newTask = { name: taskName, description: description, isDone: false };

  function setTaskObj() {
    if (taskObj) {
      setTaskName(taskObj.name);
      setDescription(taskObj.description);
    } else {
      setTaskName("");
      setDescription("");
    }
  }
  useEffect(setTaskObj, [taskObj]);

  function createTask(e) {
    e.preventDefault();
    if (!taskName || !description) return;
    setTaskList((currTaskList) => [...currTaskList, newTask]);
    console.log(newTask);
    setTaskName("");
    setDescription("");
  }
  function editTask(e) {
    e.preventDefault();
    if (!taskName || !description) return;
    setTaskList((currTaskList) =>
      currTaskList.map((currTask) =>
        currTask === taskObj ? newTask : currTask
      )
    );
  }
  return (
    <div className="details">
      <header>
        <h2>{header}</h2>
      </header>
      <form onSubmit={view === "create" ? createTask : editTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit" className={view === "edit" ? "edit" : ""}>
          {view === "create" ? "Create New" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
