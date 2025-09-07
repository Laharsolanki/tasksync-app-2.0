import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import ThemeSelector from "../components/ThemeSelector";
import * as api from "../utils/api";
import HurrayPopup from "../components/HurrayPopUp";
import { toast } from "react-toastify";
import { useRef } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("tasksync-theme") || "light"
  );
  const [showHurray, setShowHurray] = useState(false);
  const prevAllDone = useRef(false);
  const prevTaskCount = useRef(0);

  useEffect(() => {
    localStorage.setItem("tasksync-theme", theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const allDone = tasks.length > 0 && tasks.every((t) => t.completed);

    // Only trigger if transitioning from not-all-done → all-done
    // AND task count hasn't decreased (so it's not from deletion)
    if (
      allDone &&
      !prevAllDone.current &&
      tasks.length >= prevTaskCount.current
    ) {
      setShowHurray(true);

      const timer = setTimeout(() => setShowHurray(false), 2500);
      return () => clearTimeout(timer);
    }

    prevAllDone.current = allDone;
    prevTaskCount.current = tasks.length;
  }, [tasks]);

  const applyTheme = (t) => {
    if (t === "dark") {
      document.documentElement.style.setProperty("--bg", "#0f172a");
      document.documentElement.style.setProperty("--card", "#071129");
      document.documentElement.style.setProperty("--text", "#e6eef8");
      document.documentElement.style.setProperty("--muted", "#9aa6b2");
      document.documentElement.style.setProperty("--accent", "#ef4444");
    } else if (t === "blue") {
      document.documentElement.style.setProperty("--bg", "#eef2ff");
      document.documentElement.style.setProperty("--card", "#ffffff");
      document.documentElement.style.setProperty("--text", "#0f172a");
      document.documentElement.style.setProperty("--muted", "#64748b");
      document.documentElement.style.setProperty("--accent", "#3b82f6");
    } else {
      // light
      document.documentElement.style.setProperty("--bg", "#f3f4f6");
      document.documentElement.style.setProperty("--card", "#ffffff");
      document.documentElement.style.setProperty("--text", "#111827");
      document.documentElement.style.setProperty("--muted", "#6b7280");
      document.documentElement.style.setProperty("--accent", "#6366f1");
    }
  };

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await api.getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;
    try {
      const res = await api.createTask({
        title: title.trim(),
        description: description.trim(),
      });
      setTasks((prev) => [res.data, ...prev]);
      setTitle("");
      setDescription("");
      toast.success("Task added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add task");
    }
  };

  const toggleTask = async (task) => {
    try {
      const res = await api.updateTask(task._id, {
        completed: !task.completed,
      });
      setTasks((prev) =>
        prev.map((t) => (t._id === res.data._id ? res.data : t))
      );
      toast.info("Task updated!");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await api.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
      toast.error("Task deleted!");
    } catch (err) {
      console.error(err);
    }
  };

  const clearAll = async () => {
    if (!window.confirm("Clear ALL tasks?")) return;
    try {
      await api.clearAllTasks();
      setTasks([]);
      toast.error("All tasks cleared!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      {/* 🎉 Hurray animation */}
      <HurrayPopup show={showHurray} />

      <div className="header">
        <h1>TaskSync</h1>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <ThemeSelector theme={theme} setTheme={setTheme} />
          <button onClick={fetchTasks}>Refresh</button>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <div className="card">
          <div className="input-row">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="Task title"
            />
            <button onClick={addTask}>Add</button>
          </div>

          <div style={{ marginTop: 8 }}>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (optional)"
              rows={3}
              style={{ width: "100%", resize: "vertical", padding: "8px" }}
            />
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          {loading ? (
            <div className="card small">Loading...</div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          )}
        </div>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="small">Total: {tasks.length}</div>
          <div className="footer-actions">
            <button onClick={clearAll}>Clear All</button>
          </div>
        </div>
      </div>
    </div>
  );
}
