# Backend – MERN File Manager

This is the Express + MongoDB backend for the File Manager system. It handles:

- JWT-based authentication
- Cookie session management
- File uploads (using `multer`)
- File metadata storage in MongoDB
- Static file serving

---

## 🔧 Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/file-manager
JWT_SECRET=your_jwt_secret_key
```

### 3. Start server

```bash
npm run dev
```

---

## 🛠 API Endpoints

### Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Files

- `GET /api/files` — List files
- `POST /api/upload` — Upload file (admin only)
- `DELETE /api/files/:id` — Delete file (admin only)

---

## 📂 Uploads Directory

Uploaded files are saved in the `uploads/` folder and served statically at:

```
http://localhost:5000/uploads/<filename>
```

---

## 🗃️ Dependencies

- express
- mongoose
- multer
- jsonwebtoken
- cookie-parser
- dotenv
- cors
