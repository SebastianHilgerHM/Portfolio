// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { ReactNode, useId } from 'react';
import { spacing } from '@/lib/design-tokens';

interface ResponsiveGridProps {
  children: ReactNode;
  columns?: string;
  gap?: 'small' | 'medium' | 'large';
  alignItems?: 'start' | 'center' | 'stretch';
  breakpoint?: number;
  style?: React.CSSProperties;
}

const ResponsiveGrid = ({
  children,
  columns = '1fr 1fr',
  gap = 'medium',
  alignItems = 'start',
  breakpoint = 1024,
  style = {},
}: ResponsiveGridProps) => {
  const rawId = useId();
  const gridClass = `rg-${rawId.replace(/:/g, '')}`;

  const gapMap = {
    small: spacing.small,
    medium: spacing.medium,
    large: spacing.large,
  };

  return (
    <>
      <div
        className={gridClass}
        style={{
          display: 'grid',
          gridTemplateColumns: columns,
          gap: gapMap[gap],
          alignItems,
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ResponsiveGrid;
