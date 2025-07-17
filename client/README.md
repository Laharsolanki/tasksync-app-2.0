# ✅ TaskSync – Smart Task Manager App

**TaskSync** is a modern, themeable, full-stack MERN task management app that helps users stay productive and organized in a clean and responsive UI.

> 🎯 Built from scratch using the MERN stack  
> 🖌️ User themes stored in localStorage  
> ☁️ Backend with MongoDB Atlas  
> 🚀 Fully deployed frontend and backend

---

## 🔥 Live Preview

- 🔗 Frontend: [TaskSync on Vercel](https://tasksync-app-laharsolankis-projects.vercel.app/)
- 🧠 Backend: [TaskSync API on Railway](https://adaptable-gentleness-production.up.railway.app/api/tasks)


---

## ✨ Features

- 📋 Add, delete, and manage daily tasks
- ✅ Mark tasks as completed using a checkbox
- 🎨 Select themes and persist user preferences
- 🗂️ Separate completed and pending task sections
- 🖱️ Right-click on task to delete via custom context menu
- 💾 MongoDB Atlas for persistent storage
- 📱 Fully responsive design

---

## 🧱 Tech Stack

| Tech        | Usage             |
|-------------|------------------|
| React.js    | Frontend UI      |
| Node.js     | Backend runtime  |
| Express.js  | REST API         |
| MongoDB     | Cloud database   |
| CSS         | Styling          |
| Railway     | Backend hosting  |
| Vercel      | Frontend hosting |

---

## 🛠️ Getting Started Locally

```bash
# Clone the repo
git clone https://github.com/Laharsolanki/tasksync.git
cd tasksync

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your MongoDB URI in .env

# Run the app
npm run dev
📂 Project Structure
bash
Copy
Edit
tasksync/
├── client/             # React frontend
├── server/             # Node.js/Express backend
├── models/task.js      # MongoDB schema
├── routes/taskRoutes.js
├── pages/              # Home, About, NotFound
├── public/
└── README.md
📸 Screenshots
Theme	View
Light Theme	✅ All tasks completed animation
Dark Theme	✅ Task strikethrough and check
Fun Theme	✅ Custom background color

Add screenshots here using:
![Theme Screenshot](./screenshots/theme-light.png)

🎯 Future Improvements
🔔 Add task reminders/notifications

📱 Mobile app version (React Native)

👥 User authentication (login/signup)

📊 Analytics dashboard for task stats

🧑‍💻 Developed By
Lahar Solanki
💼 Engineering in IT
📬 GitHub • LinkedIn