# Faculty Management System (FMS) – MERN Stack Project

Faculty Management System (FMS) is a full-stack web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It is designed to manage faculty-related data such as profiles, payroll, leaves, and administrative operations in a centralized and efficient way.

---

## 🚀 Overview

This project provides a complete solution for managing faculty records with a modern admin dashboard UI. It includes both **frontend (React + Tailwind CSS)** and **backend (Node.js + Express + MongoDB)**.

### 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS, Vite
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Other Tools:** Axios, React Router, Nodemon

---

## ✨ Features

* 🔐 Authentication (Login / Register) Role - Baised Login.
* 👨‍🏫 Faculty Management (Add, Update, Delete)
* 💰 Payroll Management System
* 📝 Leave Management
* 📊 Dashboard with charts and analytics
* 📅 Calendar integration
* 🔔 Notifications and alerts
* 📱 Responsive UI with modern design

---

## 📂 Project Structure

```
FMS-REACT/
│
├── FRONTEND/        # React frontend
├── BACKEND/         # Node.js backend
└── README.md
```

---

## ⚙️ Installation & Setup

### 📌 Prerequisites

* Node.js (v18 or later)
* MongoDB Atlas account

---

### 🔽 Clone the repository

```bash
git clone <your-repo-url>
cd FMS-REACT
```

---

### 📦 Install Dependencies

#### Backend

```bash
cd BACKEND
npm install
```

#### Frontend

```bash
cd FRONTEND
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside **BACKEND** folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd BACKEND
npm run dev
```

### Start Frontend

```bash
cd FRONTEND
npm run dev
```

---

## 🌐 Access the Application

Open your browser and visit:

```
http://localhost:5173
```

---

## 🧠 Notes

* Make sure MongoDB Atlas IP is whitelisted (`0.0.0.0/0`)
* Use a **non-SRV connection string** if facing network issues
* Backend must run before frontend

---

## 🛡️ Security

* Do not expose your `.env` file
* Use strong passwords for database and email services
* Regenerate credentials if leaked

---

## 📌 Future Improvements

* Role-based access control
* Real-time notifications
* Advanced analytics
* Deployment (AWS / Vercel / Render)

---

## 📜 License

This project is developed for educational purposes and is free to use.

---

## 🙌 Author

Developed by **YUG**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
