import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        await axios.post("http://localhost:5000/api/files/upload", formData, {
                withCredentials: true, // 👈 Send cookies
                headers: {
                    "Content-Type": "multipart/form-data"
                }
        });
        window.location.reload();
    };

    return (
        <div className="bg-[#b0b0b0] w-full h-16 flex items-center px-4 mx-1 rounded-lg">
            <form onSubmit={handleUpload} className="flex items-center justify-between w-full">
                <input className="bg-[#454545] text-white px-4 py-2 cursor-pointer rounded-md" type="file" onChange={e => setFile(e.target.files[0])} />
                <button className="bg-blue-500 px-4 p-1 text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-gray-900" type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUpload;
