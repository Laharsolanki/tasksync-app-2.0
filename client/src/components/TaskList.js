import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t._id}>
          {t.text}
          <button onClick={() => deleteTask(t._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
