import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((t, i) => (
        <li key={t._id}>
          {t.text}
          <button onClick={() => deleteTask(i)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
