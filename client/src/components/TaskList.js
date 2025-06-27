import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>
          {t}
          <button onClick={() => deleteTask(i)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
