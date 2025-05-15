import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate ,useParams} from "react-router-dom";
import PDFViewer from "./pages/PDFViewer";
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

    function PDFViewerWrapper() {
        const { filename } = useParams();
        return <PDFViewer file={filename} />;
    }

    return (
        <Router>
            {role && <LogoutButton onLogout={handleLogout} />}
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/admin" element={role === "admin" ? <AdminDashboard /> : <Navigate to="/" />} />
                <Route path="/employee" element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />} />
                <Route path="/view/:filename" element={<PDFViewerWrapper />} />
            </Routes>
        </Router>
    );
}

export default App;
