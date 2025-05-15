import React from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <FileUpload />
            <FileList isAdmin={true} />
        </div>
    );
};

export default AdminDashboard;
