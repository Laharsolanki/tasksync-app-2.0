import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import "../App.css";

function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (tasks.length === 0) {
      setShowCelebration(true);
    } else {
      setShowCelebration(false);
    }
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setTask("");
      })
      .catch((err) => console.error(err));
  };

  const deleteTask = (index) => {
    const taskToDelete = tasks[index];
    if (!taskToDelete || !taskToDelete._id) return;
    fetch(`http://localhost:5000/api/tasks/${taskToDelete._id}`, {
      method: "DELETE",
    })
      .then(() => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={`app-container`}>
      <h1>TaskSync – ToDo App</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {showCelebration && (
        <div className="hurray-banner">🎉 Hurray! All tasks completed! 🎉</div>
      )}

      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default Home;
