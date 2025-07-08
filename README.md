# 📝 TaskSync – ToDo App

TaskSync is a responsive and interactive ToDo application built using the MERN stack (MongoDB, Express, React, Node.js). It helps users manage daily tasks with real-time updates, theme customization, and a fun "Hurray!" animation when all tasks are completed.

**🌐 Live App:**  
🔗 [Visit TaskSync](https://tasksync-app-laharsolankis-projects.vercel.app)

---

## 📦 Tech Stack

- **Frontend:** React, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Deployment:** Railway (Backend) + Vercel (Frontend)

---

## 🚀 Features

- 📋 Add, delete, and list tasks in real-time  
- 🎨 Customizable themes (Light, Dark, Blue)  
- 🎉 Celebratory animation ("Hurray!") when all tasks are completed  
- 🕹️ Data persistence using MongoDB  
- 🔒 LocalStorage theme preference (theme remains consistent across pages)  
- 📱 Fully responsive design  

---

## 🛠️ Installation & Setup (for local development)

### 1. Clone the repository

```bash
git clone https://github.com/Laharsolanki/tasksync-app.git
cd tasksync-app
```

### 2. Setup backend (inside `/server`)

```bash
cd server
npm install
```

Create a `.env` file in the server folder with:

```env
MONGODB_URI=your_mongodb_connection_string
```

Start backend:

```bash
npm start
```

### 3. Setup frontend (inside `/client`)

```bash
cd ../client
npm install
npm start
```

---

## 🌍 Deployment

### 🔧 Backend (Railway)

- Deploy your `server/` directory on Railway  
- Set the root directory to `server`  
- Add your environment variable:  

```env
MONGODB_URI=your_mongo_uri
```

### 💻 Frontend (Vercel)

- Deploy the `client/` directory on Vercel  
- Build command: `npm run build`  
- Output directory: `build`  
- Root directory: `client`  

---

## 📁 Project Structure

```
tasksync-app/
│
├── client/         # React frontend
│   └── src/
│       ├── pages/
│       │   └── Home.js
│       │   └── About.js
│       └── components/
│           └── TaskList.js
│
├── server/         # Node + Express backend
│   └── models/
│   └── routes/
│   └── index.js
│
├── .env            # Environment config (Mongo URI)
├── README.md
```

---

## 🙌 Acknowledgements

Special thanks to:  
- MongoDB Atlas for cloud database  
- Railway & Vercel for seamless hosting  
- React community for great libraries & documentation  

---

## 📬 Contact

👤 **Lahar Solanki**  
📧 laharsolanki1107@gmail.com

---

## 📅 Milestones

✅ Day 1–7: Completed all core features  
✅ Day 8: 🎉 Final polish, animations, themes, deployment, and README