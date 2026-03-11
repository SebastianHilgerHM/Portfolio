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
  rounded?: boolean;
  useDropShadow?: boolean;
}

const ImageBlock = ({
  src,
  alt,
  width = '100%',
  height = '26.25rem',
  maxWidth,
  objectFit = 'cover',
  rounded = true,
  useDropShadow = false,
}: ImageBlockProps) => {
  const imageClass = useDropShadow ? 'image-drop-shadow' : '';

  return (
    <div
      style={{
        maxWidth: maxWidth || (typeof width === 'number' ? `${width}px` : width),
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        position: 'relative',
        borderRadius: rounded ? radius.base : undefined,
        overflow: rounded ? 'hidden' : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClass}
        style={{
          objectFit,
          borderRadius: rounded ? radius.base : undefined,
        }}
      />
    </div>
  );
};

export default ImageBlock;
