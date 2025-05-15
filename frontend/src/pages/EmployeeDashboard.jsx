import React from "react";
import FileList from "../components/FileList";

const EmployeeDashboard = () => {
    return (
        <div className="bg-[#454545] px-4 py-2 w-full h-screen">
            <h1 className="text-3xl text-[#d1d1d1] font-bold text-center">Employee Dashboard</h1>
            <FileList isAdmin={false} />
        </div>
    );
};

export default EmployeeDashboard;
