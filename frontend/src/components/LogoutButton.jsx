import React from "react";
import axios from "axios";

const LogoutButton = ({ onLogout }) => {
    const logout = async () => {
        await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
        localStorage.removeItem("role");
        onLogout();
    };

    return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
