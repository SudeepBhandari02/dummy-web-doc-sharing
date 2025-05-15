import React from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";

const AdminDashboard = () => {
    return (
        <div className="bg-[#454545] px-4 py-2 w-full h-screen">
            <h1 className="text-3xl text-[#d1d1d1] font-bold text-center">Admin Dashboard</h1>
            <FileUpload />
            <FileList isAdmin={true} />
        </div>
    );
};

export default AdminDashboard;
