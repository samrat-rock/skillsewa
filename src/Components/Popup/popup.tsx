
'use client';
import React from 'react';

interface PopupModalProps {
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md text-center shadow-lg">
        <h2 className="text-xl font-bold mb-4">🎉 Welcome!</h2>
        <p className="mb-6">Thanks for visiting our site. Enjoy browsing!</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
