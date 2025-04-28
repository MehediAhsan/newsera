import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-black border border-dark p-6 rounded-lg shadow-lg w-11/12 max-w-xl max-h-[400px] overflow-auto">
                <div className="flex justify-between items-center border-b border-light pb-2 mb-4">
                    <h2 className="text-xl font-semibold text-secondary">{title}</h2>
                    <X className="text-secondary cursor-pointer" size={24} onClick={onClose} />
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
