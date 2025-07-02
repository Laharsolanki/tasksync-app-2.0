require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./models/task");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Sample route
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from MongoDB
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});



// Create a new task
app.post("/api/tasks", async (req, res) => {
  try {
    const newTask = new Task({
      text: req.body.text,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a task
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
