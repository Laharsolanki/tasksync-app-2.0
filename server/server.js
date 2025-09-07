require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use('/api/tasks', tasksRouter);


app.get('/', (req, res) => res.send('TaskSync backend running'));


mongoose
.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('Connected to MongoDB');
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
.catch(err => {
console.error('MongoDB connection error:', err.message);
});