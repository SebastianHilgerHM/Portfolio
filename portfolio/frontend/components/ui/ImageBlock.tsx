// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import { radius, motion } from '@/lib/design-tokens';

interface ImageBlockProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  objectFit?: 'cover' | 'contain';
  hoveredState?: boolean;
  rounded?: boolean;
  useDropShadow?: boolean;
}

const ImageBlock = ({
  src,
  alt,
  width = '100%',
  height = '420px',
  maxWidth,
  objectFit = 'cover',
  hoveredState = false,
  rounded = true,
  useDropShadow = false,
}: ImageBlockProps) => {
  const filterStyle = useDropShadow
    ? hoveredState
      ? 'drop-shadow(0 10px 28px rgba(0,0,0,0.55))'
      : 'drop-shadow(0 6px 16px rgba(0,0,0,0.45))'
    : undefined;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: maxWidth || (typeof width === 'number' ? `${width}px` : width),
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          position: 'relative',
          borderRadius: rounded ? `${radius.base}px` : undefined,
          overflow: rounded ? 'hidden' : undefined,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{
            objectFit,
            borderRadius: rounded ? `${radius.base}px` : undefined,
            filter: filterStyle,
            transition: useDropShadow
              ? `filter ${motion.duration.normal} ${motion.easing.standard}`
              : undefined,
          }}
        />
      </div>
    </div>
  );
};

export default ImageBlock;
