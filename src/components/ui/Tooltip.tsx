import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, position = 'top' }) => (
  <div className="relative group inline-block">
    {children}
    <span className={`absolute z-10 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
      position === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-2' :
      position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2' :
      position === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' :
      'left-full top-1/2 -translate-y-1/2 ml-2'
    }`}>{text}</span>
  </div>
);

export default Tooltip;
