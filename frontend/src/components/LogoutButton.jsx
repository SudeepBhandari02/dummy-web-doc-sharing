import React from "react";
import axios from "axios";

const LogoutButton = ({ onLogout }) => {
    const logout = async () => {
        await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
        localStorage.removeItem("role");
        onLogout();
    };

    return (
        <div className="w-full px-4 py-2 bg-[#454545]">
            <div className="bg-[#6d6d6d] w-full h-16 items-center px-4 mx-1 rounded-lg flex justify-between">
                 <h2 className="text-[#f6f6f6] text-xl font-semibold">Industrial Doc Sharer</h2>
                <button className="bg-red-600 px-4 py-2 text-white font-bold rounded-lg hover:bg-red-500 cursor-pointer" onClick={logout}>Logout</button>
            </div>
        </div>
        
    ) 
};

export default LogoutButton;
