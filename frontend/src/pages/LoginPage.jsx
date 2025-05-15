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
        <div className=" w-full h-screen bg-[#454545] px-4 py-2">
            <div className="bg-[#6d6d6d] w-full h-16 flex items-center px-4 mx-1 rounded-lg">
                <h2 className="text-[#f6f6f6] text-xl font-semibold">Industrial Doc Sharer</h2>
            </div>
            <form className="flex items-center justify-center my-4" onSubmit={handleLogin}>
                <div className="w-2/4 h-3/4 bg-[#b0b0b0] flex flex-col px-8 py-4 rounded-2xl gap-2">
                    <h2 className="text-[#454545] text-xl font-bold">Welcome Back to Doc Sharer</h2>
                    <input className="border-none outline-none bg-[#333333] text-white px-2 py-1" value={username} onChange={e => setUsername(e.target.value)} placeholder="username" required />
                    <input className="border-none outline-none bg-[#333333] text-white px-2 py-1" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button className="px-8 py-2 bg-blue-500 cursor-pointer" type="submit">Login</button>
                    <p>Don't have an account? <a className="font-extrabold" href="/signup">Signup </a>here</p>
                </div>
            

        </form>
        </div>
    );
};

export default LoginPage;
