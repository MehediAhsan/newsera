import Image from "next/image";
import React from "react";

const FileUpload = ({ label, data, setData }) => {

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setData(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-sm font-medium text-gray-300">{label}</label>}
            <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {data && <Image src={data} alt="Preview" width={100} height={100} className="mt-2 w-32 h-20 object-cover rounded-lg border" />}
        </div>
    );
};

export default FileUpload;
