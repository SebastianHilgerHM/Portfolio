// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { ReactNode } from 'react';
import { spacing, zIndex } from '@/lib/design-tokens';

interface SectionContainerProps {
  children: ReactNode;
  paddingTop?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  paddingBottom?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  maxWidth?: string;
  className?: string;
}

const SectionContainer = ({
  children,
  paddingTop = 'medium',
  paddingBottom = 'medium',
  maxWidth = '1200px',
  className = '',
}: SectionContainerProps) => {
  const paddingMap = {
    small: spacing.small,
    medium: spacing.medium,
    large: spacing.large,
    xlarge: spacing.xxl,
    xxlarge: spacing.xxl,
  };

  return (
    <section
      style={{
        width: '100%',
        paddingTop: `${paddingMap[paddingTop]}px`,
        paddingBottom: `${paddingMap[paddingBottom]}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
      className={className}
    >
      <div
        style={{
          maxWidth,
          margin: '0 auto',
          paddingLeft: `${spacing.medium}px`,
          paddingRight: `${spacing.medium}px`,
          position: 'relative',
          zIndex: zIndex.base + 1,
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
