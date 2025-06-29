import TaskList from "../components/TaskList";
import React, { useState , useEffect} from "react";
import "../App.css";

function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/tasks")
    .then((res) => res.json())
    .then((data) => {
      setTasks(data);
    })
    .catch((err) => console.error(err));
}, []);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>TaskSync – ToDo App</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default Home;
