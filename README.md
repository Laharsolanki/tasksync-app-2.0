# ✅ TaskSync App 2.0 – Smart Task Manager

TaskSync App 2.0 is a modern, themeable task management web app built with React. It offers a clean, responsive interface with features like task completion animations, theme customization, and intuitive task management.

---

## 🚀 Features

- **Add Tasks:** Quickly add tasks with titles and optional descriptions.
- **Press Enter to Add:** Type a task title and hit Enter to add instantly.
- **Task Completion:** Mark tasks as completed with checkboxes.
- **Hurray Animation:** Celebrate when all tasks are completed with a green success popup.
- **Delete & Clear All:** Remove individual tasks or clear all tasks with intuitive buttons.
- **Adjustable Description Area:** Multiline and resizable description input.
- **Theme Support:** Switch between Light, Dark, and Blue themes.
- **Interactive Buttons:** Smooth hover effects, theme-aware buttons for a professional look.
- **Responsive UI:** Works well on desktop and mobile devices.
- **Local Storage for Theme:** Retains the selected theme between sessions.

---

## 🛠️ Technologies Used

- **Frontend:** React, HTML, CSS
- **State Management:** React useState & useEffect
- **Animations:** Hurray popup for task completion

---

## ⚡ How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Laharsolanki/tasksync-app-2.0.git
   cd tasksync-app-2.0


Install dependencies:
npm install

Start the development server:
npm start

Open your browser at http://localhost:3000

## 💡 Usage
- Enter a task title (and optional description).
- Press Enter or click Add to create a task.
- Check the box to mark a task as completed. 
- When all tasks are done, a Hurray animation pops up.
- Delete individual tasks using the Delete button.
- Clear all tasks using the Clear All button.
- Change the app theme using the Theme dropdown.


## 📁 Project Structure

tasksync-app-2.0/
│
├─ client/ # React frontend
│ ├─ src/
│ │ ├─ components/ # Reusable UI components
│ │ │ ├─ TaskList.js
│ │ │ ├─ ThemeSelector.js
│ │ │ └─ HurrayPopup.js
│ │ ├─ pages/ # Main pages
│ │ │ └─ Home.js
│ │ ├─ utils/ # Helper functions, API calls
│ │ │ └─ api.js
│ │ ├─ App.css # Global CSS
│ │ └─ index.js # React entry point
│ ├─ public/ # Static files (images, icons, index.html)
│ └─ package.json
│
├─ server/ # Node.js / Express backend
│ ├─ models/ # Mongoose schemas
│ │ └─ task.js
│ ├─ routes/ # API routes
│ │ └─ taskRoutes.js
│ ├─ server.js # Express server entry point
│ └─ package.json
│
├─ .gitignore
├─ README.md
└─ package.json (optional root for full-stack setup)


👤 Developed By
Lahar Solanki
💼 Engineering in IT
🔗 GitHub: https://github.com/Laharsolanki
🔗 LinkedIn: https://in.linkedin.com/in/lahar-solanki-b04a2028b