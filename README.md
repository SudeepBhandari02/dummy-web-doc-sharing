# MERN File Management System

This is a MERN stack application with separate **Admin** and **Employee** dashboards:

- **Admins** can upload, view, and delete files.
- **Employees** can view and download files only.
- Uses **JWT-based authentication**, **cookie sessions**, and **file upload handling** via Express and MongoDB.

---

## 📂 Project Structure

```
project-root/
├── backend/       # Express API + MongoDB
├── frontend/      # React app with admin/employee dashboards
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/mern-file-manager.git](https://github.com/SudeepBhandari02/dummy-web-doc-sharing)
cd dummy-web-doc-sharing
```

### 2. Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 3. Start development servers

```bash
# In backend/
npm run dev

# In frontend/
npm run dev
```

---

## 🌐 Tech Stack

- **Frontend**: React, Axios, React Router
- **Backend**: Express.js, MongoDB, Mongoose, Multer, JWT
- **Authentication**: JWT stored in HttpOnly cookies

---

## 📦 Features

- Separate dashboards for Admin and Employee
- File upload and deletion (admin only)
- File viewing/downloading (employee)
- PDF viewer with `iframe`
- Persistent login via JWT cookies

---
