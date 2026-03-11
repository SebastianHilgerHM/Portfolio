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
  id?: string;
}

const SectionContainer = ({
  children,
  paddingTop = 'medium',
  paddingBottom = 'medium',
  maxWidth = '75rem',
  className = '',
  id,
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
        paddingTop: paddingMap[paddingTop],
        paddingBottom: paddingMap[paddingBottom],
        position: 'relative',
        overflow: 'hidden',
      }}
      className={className}
      id={id}
    >
      <div
        style={{
          maxWidth,
          margin: '0 auto',
          paddingLeft: spacing.medium,
          paddingRight: spacing.medium,
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
