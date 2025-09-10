import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width, height, srcSet, sizes, className }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    srcSet={srcSet}
    sizes={sizes}
    loading="lazy"
    className={className || "object-cover rounded-lg"}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
);

export default ResponsiveImage;
