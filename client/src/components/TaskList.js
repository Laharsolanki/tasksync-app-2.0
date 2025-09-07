import React from "react";

export default function TaskList({ tasks = [], onToggle, onDelete }) {
  return (
    <div className="card">
      {tasks.length === 0 && (
        <div className="small">No tasks yet — add one above.</div>
      )}
      {tasks.map((task) => (
        <div
          key={task._id}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task)}
            />
            <div>
              <div className="title">{task.title}</div>
              {task.description && (
                <div className="small">{task.description}</div>
              )}
            </div>
          </div>
          <div>
            <button
              className="task-delete-btn"
              onClick={() => onDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
