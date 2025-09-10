# ✅ TaskSync 2.0 – Smart Task Manager App

TaskSync 2.0 is the **next-generation version** of my Task Manager project, redesigned with **better UI, new features, and enhanced user experience**.  
It builds upon the foundation of the original [TaskSync 1.0](https://github.com/Laharsolanki/tasksync-app) but adds **customization, performance improvements, and modern deployment**.

---

## 🚀 Live Preview

🔗 [TaskSync 2.0 – Live App](https://tasksync-app-2-0.vercel.app/)

---

## 📌 Project Evolution

| Aspect              | TaskSync 1.0                   | TaskSync 2.0                                                                                                   |
| ------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **UI/UX**           | Basic styling, limited theme   | Modern UI, **theme switching**, custom backgrounds                                                             |
| **Features**        | Add, delete, mark tasks        | Add, delete, mark tasks, **persistent themes**, task sections (completed/incomplete), celebration animation 🎉 |
| **Task Management** | Flat task list                 | **Sorted by status** (Incomplete on top, Completed below)                                                      |
| **Customization**   | No options                     | **Custom themes + background colors**                                                                          |
| **Deployment**      | Vercel frontend, basic backend | Vercel frontend + **Render backend**, production-ready                                                         |
| **Codebase**        | Initial MERN setup             | **Refactored & cleaner code**, removed unused code                                                             |
| **Motivation**      | First MERN project             | **Advanced learning** – theme persistence, animations, UI polish                                               |

---

## ✨ Features of TaskSync 2.0

✅ **Theme Switching** – Light/Dark + custom background colors  
✅ **Task Sorting** – Incomplete tasks stay on top, completed tasks below  
✅ **Persistent Settings** – Theme & background saved in localStorage  
✅ **Celebration Animation** – “Hurray 🎉” when all tasks are completed  
✅ **Clear All Tasks** – Remove everything with one click  
✅ **Optimized API Integration** – Using Axios with environment variables  

---

## 🛠️ Technologies Used

| Technology        | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| **React.js**      | Frontend framework for building UI             |
| **Node.js**       | Backend runtime environment                    |
| **Express.js**    | Backend framework for handling APIs            |
| **MongoDB Atlas** | Cloud database to store tasks                  |
| **Axios**         | HTTP client for frontend–backend communication |
| **Vercel**        | Frontend deployment platform                   |
| **Render**        | Backend deployment platform                    |
| **Git/GitHub**    | Version control and code collaboration         |

---

## 📂 Project Setup

### 1️⃣ Clone the Repository

````bash
git clone https://github.com/Laharsolanki/tasksync-app-2.0.git
cd tasksync-app-2.0
````

2️⃣ Install Dependencies
```
npm install
```

3️⃣ Add Environment Variables
Create a .env file in the root and add:
```
REACT_APP_API_URL=your_backend_url
```

4️⃣ Run Locally
```
npm start
```

5️⃣ Build for Production
```
npm run build
```

🎯 Why TaskSync 2.0?
TaskSync 2.0 isn’t just an update – it’s a step up in design, usability, and performance.
Old version = ✔️ functional but basic.
New version = 🌟 polished, customizable, and production-ready.
This project reflects my learning journey in the MERN stack, moving from basic CRUD apps to theme persistence, UI animations, and full-stack deployment.

🤝 Contribution
Any suggestions for TaskSync 3.0 are welcome!

🧑‍💻 Author
👤 Lahar Solanki
💼 Engineering in IT
🔗 GitHub: https://github.com/Laharsolanki
🔗 LinkedIn: https://in.linkedin.com/in/lahar-solanki-b04a2028b


# # ✅ TaskSync App 2.0 – Smart Task Manager

# TaskSync App 2.0 is a modern, themeable task management web app built with React. It offers a clean, responsive interface with features like task completion animations, theme customization, and intuitive task management.

# ---

# ## 🚀 Features

# - **Add Tasks:** Quickly add tasks with titles and optional descriptions.
# - **Press Enter to Add:** Type a task title and hit Enter to add instantly.
# - **Task Completion:** Mark tasks as completed with checkboxes.
# - **Hurray Animation:** Celebrate when all tasks are completed with a green success popup.
# - **Delete & Clear All:** Remove individual tasks or clear all tasks with intuitive buttons.
# - **Adjustable Description Area:** Multiline and resizable description input.
# - **Theme Support:** Switch between Light, Dark, and Blue themes.
# - **Interactive Buttons:** Smooth hover effects, theme-aware buttons for a professional look.
# - **Responsive UI:** Works well on desktop and mobile devices.
# - **Local Storage for Theme:** Retains the selected theme between sessions.


# ---

# ## 🛠️ Technologies Used

# | Technology        | Purpose                                        |
# |-------------------|------------------------------------------------|
# | **React.js**      | Frontend framework for building UI             |
# | **Node.js**       | Backend runtime environment                    |
# | **Express.js**    | Backend framework for handling APIs            |
# | **MongoDB Atlas** | Cloud database to store tasks                  |
# | **Axios**         | HTTP client for frontend–backend communication |
# | **Vercel**        | Frontend deployment platform                   |
# | **Render**        | Backend deployment platform                    |
# | **Git/GitHub**    | Version control and code collaboration         |


# ---

# ## ⚡ How to Run Locally

# 1. **Clone the repository:**

# ```bash
# git clone https://github.com/Laharsolanki/tasksync-app-2.0.git
# cd tasksync-app-2.0
# ````

# 2. **Install Dependencies:**

# ```bash
# npm install
# ```

# 3. **Start the development server:**

# ```bash
# npm start
# ```

# ```
# 📁 Project Structure
# text
# Copy code
# tasksync-app-2.0/
# ├─ client/                     # React frontend
# │  ├─ src/
# │  │  ├─ components/           # Reusable UI components
# │  │  │  ├─ TaskList.js
# │  │  │  ├─ ThemeSelector.js
# │  │  │  └─ HurrayPopup.js
# │  │  ├─ pages/                # Main pages
# │  │  │  └─ Home.js
# │  │  ├─ utils/                # Helper functions, API calls
# │  │  │  └─ api.js
# │  │  ├─ App.css               # Global CSS
# │  │  └─ index.js              # React entry point
# │  ├─ public/                  # Static files (images, icons, index.html)
# │  └─ package.json
# ├─ server/                     # Node.js / Express backend
# │  ├─ models/                  # Mongoose schemas
# │  │  └─ task.js
# │  ├─ routes/                  # API routes
# │  │  └─ taskRoutes.js
# │  ├─ server.js                # Express server entry point
# │  └─ package.json
# ├─ .gitignore
# ├─ README.md
# └─ package.json (optional root for full-stack setup)

# ---

# 👤 Developed By
# Lahar Solanki
# 💼 Engineering in IT
# 🔗 GitHub: https://github.com/Laharsolanki
# 🔗 LinkedIn: https://in.linkedin.com/in/lahar-solanki-b04a2028b

# ---
# ```
