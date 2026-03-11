// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { colors, spacing, typography } from '@/lib/design-tokens';

interface TechStackProps {
  items: string[];
  justify?: 'center' | 'flex-start' | 'flex-end';
}

const TechStack = ({
  items,
  justify = 'center',
}: TechStackProps) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: spacing.small,
        flexWrap: 'wrap',
        justifyContent: justify,
      }}
    >
      {items.map((tech) => (
        <span
          key={tech}
          style={{
            padding: `${spacing.xs} ${spacing.small}`,
            border: `0.0625rem solid ${colors.text_secondary}`,
            borderRadius: spacing.xs,
            fontSize: typography.fontSize.body,
            color: colors.text_primary,
            fontFamily: typography.fontFamily.mono,
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
