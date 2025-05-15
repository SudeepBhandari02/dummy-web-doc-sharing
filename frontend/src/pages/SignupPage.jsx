import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("employee");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", { username, password, role });
            alert("User registered successfully! Please login.");
            navigate("/");
        } catch (err) {
            alert(err.response?.data?.error || "Signup failed");
        }
    };

    return (
        <div className=" w-full h-screen bg-[#454545] px-4 py-2">
            <div className="bg-[#6d6d6d] w-full h-16 flex items-center px-4 mx-1 rounded-lg">
                <h2 className="text-[#f6f6f6] text-xl font-semibold">Industrial Doc Sharer</h2>
            </div>
            <form className="flex items-center justify-center my-4" onSubmit={handleSignup}>
            <div className="w-2/4 h-3/4 bg-[#b0b0b0] flex flex-col px-8 py-4 rounded-2xl gap-2">
                <h2 className="text-[#454545] text-xl font-bold">Welcome to Doc Sharer...Register</h2>
                <input
                    className="border-none outline-none bg-[#333333] text-white px-2 py-1"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="border-none outline-none bg-[#333333] text-white px-2 py-1"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select className="border-none outline-none bg-[#333333] text-white px-2 py-1" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                </select>
                <button className="px-8 py-2 bg-blue-500 cursor-pointer" type="submit">Register</button>
            </div>
        </form>
        </div>
        
    );
};

export default SignupPage;
