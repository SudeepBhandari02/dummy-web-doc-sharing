import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import LogoutButton from "./components/LogoutButton";
import SignupPage from "./pages/SignupPage";

function App() {
    const [role, setRole] = useState(localStorage.getItem("role"));

    const handleLogin = (userRole) => {
        setRole(userRole);
        localStorage.setItem("role", userRole);
    };

    const handleLogout = () => {
        setRole(null);
    };

    return (
        <Router>
            {role && <LogoutButton onLogout={handleLogout} />}
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/admin" element={role === "admin" ? <AdminDashboard /> : <Navigate to="/" />} />
                <Route path="/employee" element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
