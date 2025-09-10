import React from 'react';

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width = '100%', height = 24, className }) => (
  <div
    className={`animate-pulse bg-gray-700 rounded ${className || ''}`}
    style={{ width, height }}
    aria-label="Loading..."
  />
);

export default SkeletonLoader;
