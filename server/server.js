const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
app.use(cors());

// app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/tasks", (req, res) => {
  const sampleTasks = [
    "Learn React",
    "Build a Full Stack App",
    "Master Git & GitHub",
    "Deploy to Production"
  ];
  res.json(sampleTasks);
});


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
