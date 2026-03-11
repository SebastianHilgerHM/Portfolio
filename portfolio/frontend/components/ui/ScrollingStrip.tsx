// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { ReactNode } from 'react';
import { spacing } from '@/lib/design-tokens';

interface ScrollingStripProps {
  children: ReactNode;
  gap?: 'small' | 'medium' | 'large';
  className?: string;
}

const ScrollingStrip = ({
  children,
  gap = 'medium',
  className,
}: ScrollingStripProps) => {
  const gapMap = {
    small: spacing.small,
    medium: spacing.medium,
    large: spacing.large,
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <div
        className={className}
        style={{
          display: 'flex',
          gap: gapMap[gap],
        }}
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            style={{
              display: 'flex',
              gap: gapMap[gap],
              flexShrink: 0,
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingStrip;
