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
        <div className="bg-[#b0b0b0] w-full h-3/4 flex flex-col px-8 py-4 rounded-2xl gap-2 my-4 mx-1">
            <h2 className="text-[#424242] font-bold text-3xl">Files</h2>
            <ul className="border-2 rounded-xl border-[#424242] px-4 py-4">
                {files.map(file => (
                    <li 
                    className="flex items-center justify-between bg-[#454545] text-[#d1d1d1] text-md px-4 py-2 my-2 rounded-lg"
                    key={file._id}>
                        {file.originalname}
                        {" "}
                        <a className="bg-[#b0b0b0] text-[#454545] px-2 py-1 rounded-md" href={`http://localhost:5000/uploads/${file.filename}`} download>Download</a>
                        {" "}
                        <Link className="bg-[#b0b0b0] text-[#454545] px-2 py-1 rounded-md"  to={`/view/${encodeURIComponent(file.filename)}`}>View PDF</Link>

                        {isAdmin && <button className="bg-[#b0b0b0] text-[#454545] px-2 py-1 rounded-md cursor-pointer"  onClick={() => deleteFile(file._id)}>Delete</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
