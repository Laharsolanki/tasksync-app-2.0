import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (payload) => axios.post(`${API_URL}/tasks`, payload);
export const updateTask = (id, payload) => axios.put(`${API_URL}/tasks/${id}`, payload);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);
export const clearAllTasks = () => axios.delete(`${API_URL}/tasks`);