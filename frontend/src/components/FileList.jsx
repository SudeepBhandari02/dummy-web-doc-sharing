import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const FileList = ({ isAdmin }) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
    const fetchFiles = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/files", {
                withCredentials: true,
            });
            setFiles(res.data);
        } catch (err) {
            console.error("Failed to fetch files:", err);
        }
    };

    fetchFiles(); 
    }, []);

    const deleteFile = async (id) => {
        await axios.delete(`http://localhost:5000/api/files/${id}`,{
            withCredentials: true
        });
        setFiles(files.filter(file => file._id !== id));
    };

    return (
        <div>
            <h2>Files</h2>
            <ul>
                {files.map(file => (
                    <li key={file._id}>
                        {file.originalname}
                        {" "}
                        <a href={`http://localhost:5000/uploads/${file.filename}`} download>Download</a>
                        {" "}
                        <Link to={`/view/${encodeURIComponent(file.filename)}`}>View PDF</Link>

                        {isAdmin && <button onClick={() => deleteFile(file._id)}>Delete</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
