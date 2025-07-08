import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import "../App.css";

function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hadTasksBefore, setHadTasksBefore] = useState(false); // New tracker

  useEffect(() => {
    setLoading(true);
    fetch("https://adaptable-gentleness-production.up.railway.app/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        if (data.length > 0) setHadTasksBefore(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const addTask = () => {
    if (task.trim() === "") return;

    fetch("https://adaptable-gentleness-production.up.railway.app/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setTask("");
        setHadTasksBefore(true); // Mark that tasks were present
      })
      .catch((err) => console.error(err));
  };

  const deleteTask = (index) => {
    const taskToDelete = tasks[index];
    if (!taskToDelete || !taskToDelete._id) return;

    fetch(`https://adaptable-gentleness-production.up.railway.app/api/tasks/${taskToDelete._id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="app-container">
      <h1>TaskSync – ToDo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {loading ? (
        <p>Loading...</p>
      ) : tasks.length === 0 ? (
        hadTasksBefore ? (
          <div className="hurray-banner">🎉 Hurray! All tasks completed! 🎉</div>
        ) : (
          <div className="start-message">🌞 Let's start your day by adding some tasks!</div>
        )
      ) : (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      )}
    </div>
  );
}

export default Home;
