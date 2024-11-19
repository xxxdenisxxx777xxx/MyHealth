import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
                <p className="absolute top-1 right-2 text-gray-500 cursor-pointer" onClick={onClose}>×</p>
                {children}
            </div>
        </div>
    );
};

export default Modal;
