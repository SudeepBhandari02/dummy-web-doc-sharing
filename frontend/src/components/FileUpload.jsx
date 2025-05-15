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
        <form onSubmit={handleUpload}>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUpload;
