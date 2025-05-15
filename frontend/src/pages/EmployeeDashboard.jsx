import React from "react";
import FileList from "../components/FileList";

const EmployeeDashboard = () => {
    return (
        <div>
            <h1>Employee Dashboard</h1>
            <FileList isAdmin={false} />
        </div>
    );
};

export default EmployeeDashboard;
