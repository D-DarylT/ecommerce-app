import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, className }) => (
  <div className={`w-full bg-gray-800 rounded h-4 ${className || ''}`} aria-label="Progress Bar">
    <div
      className="bg-cyan-500 h-4 rounded transition-all duration-300"
      style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
      aria-valuenow={value}
      aria-valuemax={max}
      role="progressbar"
    />
  </div>
);

export default ProgressBar;
