// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P07 - Portfolio Website

'use client';

import { colors, spacing, typography } from '@/lib/design-tokens';

interface ImportantTextProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  marginBottom?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
}

const ImportantText = ({
  children,
  align = 'left',
  marginBottom = 'xxlarge',
}: ImportantTextProps) => {
  const marginMap = {
    small: spacing.small,
    medium: spacing.medium,
    large: spacing.large,
    xlarge: spacing.xxl,
    xxlarge: spacing.xxl,
  };

  return (
    <p
      style={{
        fontSize: typography.fontSize.h3,
        fontWeight: typography.fontWeight.bold,
        color: colors.text_primary,
        marginBottom: marginMap[marginBottom],
        textAlign: align,
      }}
    >
      {children}
    </p>
  );
};

export default ImportantText;
