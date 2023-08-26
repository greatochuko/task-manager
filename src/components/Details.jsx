import React, { useState } from "react";

export default function Detail({ setTaskList }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const newTask = { task: taskName, description: description };

  function createTask(e) {
    e.preventDefault();
    if (!taskName || !description) return;
    setTaskList((currTaskList) => [...currTaskList, newTask]);
  }
  return (
    <div className="details">
      <header>
        <h1>Details</h1>
      </header>
      <form onSubmit={createTask}>
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
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
