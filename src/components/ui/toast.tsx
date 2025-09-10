import React from "react";

interface ToastProps {
  message: string;
  icon?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, icon, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
      {icon}
      <span>{message}</span>
      <button
        className="ml-2 text-white hover:text-cyan-200"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};
