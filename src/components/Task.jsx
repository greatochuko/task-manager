import React from "react";

export default function Task({ task }) {
  return (
    <div className="task">
      <input type="checkbox" checked={task.isDone} />
      <p>{task.name}</p>
      <button>Delete</button>
    </div>
  );
}
