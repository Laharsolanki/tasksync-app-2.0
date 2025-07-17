import React, { useState } from "react";

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, taskId: null });

  const handleRightClick = (e, taskId) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.pageX,
      y: e.pageY,
      taskId: taskId,
    });
  };

  const handleDelete = () => {
    if (contextMenu.taskId) {
      deleteTask(contextMenu.taskId);
      setContextMenu({ ...contextMenu, visible: false });
    }
  };

  const closeContextMenu = () => {
    if (contextMenu.visible) {
      setContextMenu({ ...contextMenu, visible: false });
    }
  };

  return (
    <div onClick={closeContextMenu}>
      <ul>
        {tasks.map((task) => (
          <li
            key={task._id}
            onContextMenu={(e) => handleRightClick(e, task._id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task._id)}
              style={{ marginRight: "8px" }}
            />
            {task.text}
          </li>
        ))}
      </ul>

      {contextMenu.visible && (
        <div
          style={{
            position: "absolute",
            top: contextMenu.y,
            left: contextMenu.x,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <button onClick={handleDelete} style={{ cursor: "pointer" }}>🗑️ Delete</button>
        </div>
      )}
    </div>
  );
}
export default TaskList;