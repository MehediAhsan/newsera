import React, { useRef, useState } from "react";
import { Upload, Trash2, FileText } from "lucide-react";
import Image from "next/image";
import { compressImage } from "@/utils/constant";

const FileUpload = ({ label, data, setData }) => {
    const [fileName, setFileName] = useState(null);
    const [fileType, setFileType] = useState(null);
    const fileInputRef = useRef(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFile = async (file) => {
        if (file) {
            setFileName(file.name);
            setFileType(file.type);
    
            try {
                const compressedBlob = await compressImage(file, { quality: 0.2, maxWidth: 300 });
    
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64Image = reader.result;
                    setData(base64Image);
                };
                reader.onerror = (error) => {
                    console.error("FileReader error:", error);
                    setData(null); 
                };
                
                reader.readAsDataURL(compressedBlob);
            } catch (error) {
                console.error("Compression error:", error);
                setData(null); 
            }
        }
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleDelete = () => {
        setData(null);
        setFileName(null);
        setFileType(null);
    };

    return (
        <div className="flex flex-col gap-3">
            {label && (
                <label className="text-sm font-medium text-gray-300">
                    {label} <span className="text-red-500">*</span>
                </label>
            )}

            {!data ? (
                <div
                    className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition bg-gray-950 
                    ${dragActive ? "border-blue-500 bg-gray-800" : "border-gray-700"}`}
                    onClick={() => fileInputRef.current.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <Upload className="w-10 h-10 text-gray-400" />
                    <p className="text-gray-400 text-sm mt-2">Drag & Drop a file here</p>
                    <p className="text-gray-500 text-xs">or click to upload</p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleChange}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="relative flex items-center gap-4 bg-gray-950 p-3 rounded-lg border border-gray-700 shadow-lg">
                    {data?.startsWith("data:image/") || fileType?.startsWith("image/") ? (
                        <>
                            <Image
                                src={data}
                                alt="Preview"
                                width={100}
                                height={100}
                                className="w-32 h-20 object-cover rounded-lg border border-gray-700"
                            />
                            {fileName}
                        </>
                    ) : (
                        <div className="flex items-center gap-2 text-gray-300">
                            <FileText size={30} />
                            <span className="text-sm">{fileName}</span>
                        </div>
                    )}

                    <button
                        onClick={handleDelete}
                        className="ml-auto flex items-center gap-1 text-red-500 text-xs hover:text-red-400 transition"
                    >
                        <Trash2 size={14} /> Remove
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
