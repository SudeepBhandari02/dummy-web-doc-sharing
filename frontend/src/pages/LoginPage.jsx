import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(
            "http://localhost:5000/api/auth/login",
            { username: username.trim(), password: password.trim() },
            { withCredentials: true }
        );

        if (res.data?.role) {
            localStorage.setItem("role", res.data.role);
            onLogin(res.data.role); // Optional if needed elsewhere

            // Redirect based on role
            if (res.data.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/employee");
            }
        } else {
            alert("Invalid login response");
        }
    } catch (err) {
        const errorMessage = err.response?.data?.error || "Login failed. Please try again.";
        alert(errorMessage);
    }
};


    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/signup">Signup here</a></p>

        </form>
    );
};

export default LoginPage;
