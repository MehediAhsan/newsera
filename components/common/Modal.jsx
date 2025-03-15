import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-xl max-h-[400px] overflow-auto">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 className="text-xl font-semibold text-white">{title}</h2>
                    <X className="text-white cursor-pointer" size={24} onClick={onClose} />
                </div>
                <div className="">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
