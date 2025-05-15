# Frontend – MERN File Manager

This is the React frontend for the file manager system. It includes:

- Login & Signup screens
- Admin dashboard (upload/view/delete files)
- Employee dashboard (view/download files)
- PDF viewing with `iframe`
- Cookie-based session management

---

## 📦 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Frontend runs at:  
📍 `http://localhost:5173`

---

## 🧩 Pages

- `/login` – User login
- `/signup` – User registration
- `/admin` – Admin dashboard
- `/employee` – Employee dashboard
- `/view/:filename` – PDF viewer

---

## 📁 Features

- Axios with `withCredentials: true` for cookie-based auth
- Uses localStorage to store role
- Conditional rendering based on user role
- Logout button clears cookies and redirects

---

## 📄 Tech Stack

- React (Vite)
- React Router
- Axios
- Tailwind CSS (optional)
