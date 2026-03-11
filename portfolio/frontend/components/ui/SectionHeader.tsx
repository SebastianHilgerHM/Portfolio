// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { colors, spacing, typography } from '@/lib/design-tokens';

interface SectionHeaderProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  marginBottom?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  level?: 'h2' | 'h3';
}

const SectionHeader = ({
  children,
  align = 'left',
  marginBottom = 'xxlarge',
  level = 'h2',
}: SectionHeaderProps) => {
  const marginMap = {
    small: spacing.small,
    medium: spacing.medium,
    large: spacing.large,
    xlarge: spacing.xxl,
    xxlarge: spacing.xxl,
  };

  const Component = level;
  const fontSize = level === 'h2' ? typography.fontSize.h2 : typography.fontSize.h3;

  return (
    <Component
      style={{
        fontSize,
        fontWeight: typography.fontWeight.bold,
        color: colors.text_primary,
        marginBottom: marginMap[marginBottom],
        textAlign: align,
      }}
    >
      {children}
    </Component>
  );
};

export default SectionHeader;
